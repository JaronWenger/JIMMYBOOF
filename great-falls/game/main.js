import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.FogExp2(0xb9d8f0, 0.0006);

// Camera
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 5000);
camera.position.set(0, 80, 200);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const sun = new THREE.DirectionalLight(0xfff4e0, 2.0);
sun.position.set(300, 500, 200);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 2000;
sun.shadow.camera.left = -600;
sun.shadow.camera.right = 600;
sun.shadow.camera.top = 600;
sun.shadow.camera.bottom = -600;
scene.add(sun);

// Rapids water shader — applied to the terrain mesh itself
const textureLoader = new THREE.TextureLoader();
const n1 = textureLoader.load('/Water_1_M_Normal.jpg', t => {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(40, 40);
});
const n2 = textureLoader.load('/Water_2_M_Normal.jpg', t => {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(30, 30);
});

const rapidsMat = new THREE.ShaderMaterial({
  uniforms: {
    time:      { value: 0 },
    normalMap1: { value: n1 },
    normalMap2: { value: n2 },
    sunDir:    { value: new THREE.Vector3(300, 500, 200).normalize() },
    sunColor:  { value: new THREE.Color(1.0, 0.98, 0.9) },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;

    void main() {
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPos = worldPos.xyz;
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: /* glsl */`
    uniform float time;
    uniform sampler2D normalMap1;
    uniform sampler2D normalMap2;
    uniform vec3 sunDir;
    uniform vec3 sunColor;

    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;

    void main() {
      // Two normal layers scrolling at different speeds + directions
      vec2 uv1 = vUv * 40.0 + vec2(0.0,  time * 0.4);
      vec2 uv2 = vUv * 30.0 + vec2(time * 0.05, time * 0.25);

      vec3 nt1 = texture2D(normalMap1, uv1).rgb * 2.0 - 1.0;
      vec3 nt2 = texture2D(normalMap2, uv2).rgb * 2.0 - 1.0;
      vec3 tn  = normalize(nt1 + nt2);

      // Perturb surface normal
      vec3 N = normalize(vWorldNormal + tn * 2.5);

      // Diffuse lighting
      float diff = max(dot(N, sunDir), 0.0);

      // Specular (Blinn-Phong)
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      vec3 halfVec = normalize(sunDir + viewDir);
      float spec = pow(max(dot(N, halfVec), 0.0), 128.0);

      // Foam: bright where normals are turbulent
      float foam = smoothstep(0.2, 0.9, (nt1.z + nt2.z) * 0.5);

      // Base water color — deep blue-green, foamy white on top
      vec3 deepColor = vec3(0.05, 0.25, 0.4);
      vec3 foamColor = vec3(0.85, 0.93, 1.0);
      vec3 baseColor = mix(deepColor, foamColor, foam);

      vec3 color = baseColor * (0.65 + 0.35 * diff) * sunColor
                 + sunColor * spec * 0.9;

      gl_FragColor = vec4(color, 1.0);
    }
  `,
});

// Terrain — apply rapids material
let terrain = null;
const loader = new GLTFLoader();
loader.load('./Untitled.glb', ({ scene: gltf }) => {
  gltf.traverse(obj => {
    if (obj.isMesh) {
      obj.geometry.computeVertexNormals(); // smooth faceted Delaunay normals
      obj.material = rapidsMat;
      obj.castShadow = false;
      obj.receiveShadow = false;
    }
  });
  terrain = gltf;
  scene.add(gltf);
  document.getElementById('loading').style.display = 'none';
});

// Controls
const fly = new PointerLockControls(camera, renderer.domElement);
const overlay = document.getElementById('overlay');
const modeLabel = document.getElementById('mode');

let flyMode = false;

renderer.domElement.addEventListener('click', e => {
  if (!flyMode) enterFly();
});

fly.addEventListener('lock', () => {
  flyMode = true;
  overlay.style.display = 'none';
  modeLabel.textContent = gravityMode ? 'WALK' : 'FLY';
});

fly.addEventListener('unlock', () => {
  flyMode = false;
  gravityMode = false;
  modeLabel.textContent = 'ORBIT';
});

function enterFly() { fly.lock(); }
function exitFly()  { fly.unlock(); }

// Keys
const keys = new Set();
window.addEventListener('keydown', e => {
  keys.add(e.code);
  if (e.code === 'KeyG' && flyMode) toggleGravity();
  if (e.code === 'Escape' && flyMode) exitFly();
});
window.addEventListener('keyup', e => keys.delete(e.code));

// Orbit-mode mouse
const euler  = new THREE.Euler(0, 0, 0, 'YXZ');
const fwd    = new THREE.Vector3();
const right  = new THREE.Vector3();
const up     = new THREE.Vector3();
const worldUp = new THREE.Vector3(0, 1, 0);

let mouseBtn = -1;
let lastX = 0, lastY = 0;

renderer.domElement.addEventListener('mousedown', e => {
  if (flyMode) return;
  mouseBtn = e.button;
  lastX = e.clientX; lastY = e.clientY;
  if (e.button === 1) e.preventDefault();
});
renderer.domElement.addEventListener('contextmenu', e => e.preventDefault());
window.addEventListener('mouseup', () => { mouseBtn = -1; });

window.addEventListener('mousemove', e => {
  if (flyMode || mouseBtn === -1) return;
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  lastX = e.clientX; lastY = e.clientY;

  if (mouseBtn === 1) {
    camera.getWorldDirection(fwd);
    right.crossVectors(fwd, worldUp).normalize();
    up.crossVectors(right, fwd).normalize();

    if (e.metaKey) {
      camera.position.addScaledVector(fwd, dy * 0.4);
    } else if (e.shiftKey) {
      camera.position.addScaledVector(right, -dx * 0.2);
      camera.position.addScaledVector(up,     dy * 0.2);
    } else {
      euler.setFromQuaternion(camera.quaternion);
      euler.y -= dx * 0.004;
      euler.x -= dy * 0.004;
      euler.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, euler.x));
      camera.quaternion.setFromEuler(euler);
    }
  }

  if (mouseBtn === 2) {
    camera.getWorldDirection(fwd);
    right.crossVectors(fwd, worldUp).normalize();
    up.crossVectors(right, fwd).normalize();
    camera.position.addScaledVector(right, -dx * 0.2);
    camera.position.addScaledVector(up,     dy * 0.2);
  }
});

// Scroll zoom
let speed = 50;
window.addEventListener('wheel', e => {
  if (flyMode) {
    speed = Math.max(5, Math.min(500, speed - e.deltaY * 0.05));
  } else {
    camera.getWorldDirection(fwd);
    camera.position.addScaledVector(fwd, e.deltaY * 0.15);
  }
}, { passive: true });

// Resize
window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// Gravity / walk
let gravityMode = false;
let verticalVelocity = 0;
const GRAVITY = -25;
const PLAYER_HEIGHT = 1.8;
const raycaster = new THREE.Raycaster();
const downVec  = new THREE.Vector3(0, -1, 0);
const flatFwd  = new THREE.Vector3();

function toggleGravity() {
  gravityMode = !gravityMode;
  verticalVelocity = 0;
  modeLabel.textContent = gravityMode ? 'WALK' : 'FLY';
}

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  // Animate rapids
  rapidsMat.uniforms.time.value += dt;

  if (flyMode && fly.isLocked) {
    camera.getWorldDirection(fwd);
    right.crossVectors(fwd, worldUp).normalize();
    const boost = (keys.has('ShiftLeft') || keys.has('ShiftRight')) ? 4 : 1;
    const s = speed * boost * dt;

    if (gravityMode) {
      flatFwd.set(fwd.x, 0, fwd.z).normalize();
      if (keys.has('KeyW')) camera.position.addScaledVector(flatFwd, s);
      if (keys.has('KeyS')) camera.position.addScaledVector(flatFwd, -s);
      if (keys.has('KeyD')) camera.position.addScaledVector(right, s);
      if (keys.has('KeyA')) camera.position.addScaledVector(right, -s);

      verticalVelocity += GRAVITY * dt;
      camera.position.y += verticalVelocity * dt;

      if (terrain) {
        raycaster.set(camera.position, downVec);
        const hits = raycaster.intersectObject(terrain, true);
        if (hits.length > 0) {
          const groundY = hits[0].point.y + PLAYER_HEIGHT;
          if (camera.position.y < groundY) {
            camera.position.y = groundY;
            verticalVelocity = 0;
          }
        }
      }
    } else {
      if (keys.has('KeyW')) camera.position.addScaledVector(fwd, s);
      if (keys.has('KeyS')) camera.position.addScaledVector(fwd, -s);
      if (keys.has('KeyD')) camera.position.addScaledVector(right, s);
      if (keys.has('KeyA')) camera.position.addScaledVector(right, -s);
      if (keys.has('KeyE')) camera.position.y += s;
      if (keys.has('KeyQ')) camera.position.y -= s;
    }
  }

  renderer.render(scene, camera);
}
animate();
