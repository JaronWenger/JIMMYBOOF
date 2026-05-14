import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;


// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.FogExp2(0xb9d8f0, 0.0006);

// Camera
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 5000);
camera.position.set(68.6, 29.1, -279.6);
camera.lookAt(68.6 + -0.061, 29.1 + -0.056, -279.6 + 0.997);

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
scene.add(new THREE.AmbientLight(0x8899bb, 0.25));
const sun = new THREE.DirectionalLight(0xfff0cc, 3.0);
sun.position.set(600, 300, 100);
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
const n1 = textureLoader.load('./Water_1_M_Normal.jpg', t => {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
});
const n2 = textureLoader.load('./Water_2_M_Normal.jpg', t => {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
});
const rockColor = textureLoader.load('./Rock_Color.png', t => {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
});
const rockNormal = textureLoader.load('./Rock_Normal.png', t => {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
});
const rockRoughness = textureLoader.load('./Rock_Roughness.png', t => {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
});

const rapidsMat = new THREE.ShaderMaterial({ side: THREE.DoubleSide,
  uniforms: {
    time:       { value: 0 },
    normalMap1: { value: n1 },
    normalMap2: { value: n2 },
    rockColorMap:     { value: rockColor },
    rockNormalMap:    { value: rockNormal },
    rockRoughnessMap: { value: rockRoughness },
    sunDir:    { value: new THREE.Vector3(600, 300, 100).normalize() },
    sunColor:  { value: new THREE.Color(1.0, 0.98, 0.9) },
  },
  vertexColors: true,
  vertexShader: /* glsl */`
    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec3 vColor;

    void main() {
      vUv = uv;
      vColor = color.rgb;
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
    uniform sampler2D rockColorMap;
    uniform sampler2D rockNormalMap;
    uniform sampler2D rockRoughnessMap;
    uniform vec3 sunDir;
    uniform vec3 sunColor;

    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec3 vColor;

    void main() {
      if (!gl_FrontFacing) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
      float waterMask = smoothstep(0.1, 0.5, vColor.r + vColor.g + vColor.b);

      // Water normal maps
      vec2 uv1 = vWorldPos.xz * 0.08 + vec2(0.0, time * -0.4);
      vec2 uv2 = vWorldPos.xz * 0.06 + vec2(time * -0.05, time * -0.25);
      vec3 nt1 = texture2D(normalMap1, uv1).rgb * 2.0 - 1.0;
      vec3 nt2 = texture2D(normalMap2, uv2).rgb * 2.0 - 1.0;
      vec3 tn  = normalize(nt1 + nt2);

      // Rock textures
      vec2 rockUv = vWorldPos.zx * 0.05;
      vec3 rockSample = texture2D(rockColorMap, rockUv).rgb;
      float rockLuma = dot(rockSample, vec3(0.299, 0.587, 0.114));
      vec3 rockAlbedo = mix(vec3(rockLuma), rockSample, 0.2);
      vec3 rockNorm   = texture2D(rockNormalMap, rockUv).rgb * 2.0 - 1.0;
      float rockRough = texture2D(rockRoughnessMap, rockUv).r;

      // Blended normal
      vec3 N = normalize(mix(
        vWorldNormal + rockNorm * 0.6,
        vWorldNormal + tn * 2.5,
        waterMask
      ));

      // Lighting
      float diff = max(dot(N, sunDir), 0.0);
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      vec3 halfVec = normalize(sunDir + viewDir);
      float spec = pow(max(dot(N, halfVec), 0.0), 128.0);

      // Foam from normal map turbulence
      float foam = smoothstep(0.0, 0.6, (nt1.z + nt2.z) * 0.5) * waterMask;

      // Slope-based whiteness — steep = whitewater, flat = calm
      float slope = 1.0 - abs(vWorldNormal.y);
      float slopeFoam = smoothstep(0.001, 0.02, slope) * waterMask;

      // Rock color with lighting
      vec3 rockLit = rockAlbedo * (0.18 + 0.82 * diff) * sunColor
                   + sunColor * spec * 0.05 * (1.0 - rockRough);

      // Slope drives base color: flat = teal, steep = white
      // Normal map adds subtle surface churn on top
      vec3 waterColor = mix(vec3(0.08, 0.45, 0.42), vec3(1.0, 1.0, 1.0), slopeFoam);
      waterColor = mix(waterColor, vec3(1.0, 1.0, 1.0), foam * 0.25);
      vec3 waterLit = waterColor * (0.4 + 0.6 * diff) + vec3(spec * 0.9);

      vec3 color = mix(rockLit, waterLit, waterMask);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
});

// Terrain — apply rapids material
let terrain = null;
const loader = new GLTFLoader();
loader.load('./GREATFALLS.glb', ({ scene: gltf }) => {
  gltf.traverse(obj => {
    if (obj.isMesh) {
      obj.geometry.computeVertexNormals();
      obj.geometry.computeBoundsTree();
      obj.material = rapidsMat;
      obj.castShadow = false;
      obj.receiveShadow = false;
    }
  });
  terrain = gltf;
  scene.add(gltf);

  // Black plane sized to terrain footprint
  const box = new THREE.Box3().setFromObject(gltf);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  const underplane = new THREE.Mesh(
    new THREE.PlaneGeometry(size.x, size.z),
    new THREE.MeshBasicMaterial({ color: 0x000000 })
  );
  underplane.rotation.x = -Math.PI / 2;
  underplane.position.set(center.x, box.min.y - 1, center.z);
  scene.add(underplane);

  // Build skirt from actual mesh boundary edges down to floor
  let terrainMesh = null;
  gltf.traverse(obj => { if (obj.isMesh && !terrainMesh) terrainMesh = obj; });
  if (terrainMesh && terrainMesh.geometry.index) {
    const geo = terrainMesh.geometry;
    const posAttr = geo.attributes.position;
    const idx = geo.index;
    terrainMesh.updateWorldMatrix(true, false);

    const edgeCount = new Map();
    for (let i = 0; i < idx.count; i += 3) {
      const a = idx.getX(i), b = idx.getX(i+1), c = idx.getX(i+2);
      for (const [p, q] of [[a,b],[b,c],[c,a]]) {
        const key = p < q ? `${p}_${q}` : `${q}_${p}`;
        edgeCount.set(key, (edgeCount.get(key) || 0) + 1);
      }
    }

    const verts = [], inds = [];
    const vt = new THREE.Vector3();
    const floorY = box.min.y - 1;

    for (const [key, count] of edgeCount) {
      if (count !== 1) continue;
      const [a, b] = key.split('_').map(Number);
      vt.fromBufferAttribute(posAttr, a).applyMatrix4(terrainMesh.matrixWorld);
      const ax = vt.x, ay = vt.y, az = vt.z;
      vt.fromBufferAttribute(posAttr, b).applyMatrix4(terrainMesh.matrixWorld);
      const bx = vt.x, by = vt.y, bz = vt.z;
      const base = verts.length / 3;
      verts.push(ax, ay, az, bx, by, bz, ax, floorY, az, bx, floorY, bz);
      inds.push(base, base+2, base+1, base+1, base+2, base+3);
    }

    const skirtGeo = new THREE.BufferGeometry();
    skirtGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    skirtGeo.setIndex(inds);
    scene.add(new THREE.Mesh(skirtGeo, new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide })));
  }

  snapKayakerToTerrain();
  document.getElementById('loading').style.display = 'none';
  overlay.style.display = 'flex';
});

// Kayaker
let kayakGltf = null;
let playMode = false;
let kayakerYaw = 0; // facing downstream (+Z)
const kayakMat = new THREE.MeshStandardMaterial({ color: 0x2255bb, roughness: 0.25, metalness: 0.1 });
const kayakLoader = new GLTFLoader();
function snapKayakerToTerrain() {
  if (!kayakGltf || !terrain) return;
  raycaster.set(new THREE.Vector3(kayakGltf.position.x, kayakGltf.position.y + 20, kayakGltf.position.z), downVec);
  const hits = raycaster.intersectObject(terrain, true);
  if (hits.length > 0) kayakGltf.position.y = hits[0].point.y + 0.6;
}

kayakLoader.load('./Kayaker.glb', ({ scene: gltf }) => {
  gltf.traverse(obj => {
    if (obj.isMesh) obj.material = kayakMat;
  });
  gltf.scale.setScalar(1);
  gltf.position.set(16, -1, -242);
  gltf.rotation.y = Math.PI / 2;
  scene.add(gltf);
  kayakGltf = gltf;
  snapKayakerToTerrain();
});

// Controls
const fly = new PointerLockControls(camera, renderer.domElement);
const overlay = document.getElementById('overlay');
const modeLabel = document.getElementById('mode');
const clipFade = document.getElementById('clip-fade');

let flyMode = false;

const introFromPos = new THREE.Vector3();
const introFromQuat = new THREE.Quaternion();
const introToPos   = new THREE.Vector3();
const introToQuat  = new THREE.Quaternion();
let introing = false, introT = 0;
const INTRO_DUR = 2.8;

document.getElementById('go').addEventListener('click', () => {
  overlay.style.display = 'none';
  introFromPos.copy(camera.position);
  introFromQuat.copy(camera.quaternion);

  // Target = behind-kayak gameplay position
  if (kayakGltf) {
    const behind = new THREE.Vector3(-Math.sin(kayakerYaw), 0, -Math.cos(kayakerYaw));
    introToPos.copy(kayakGltf.position).addScaledVector(behind, 6).add(new THREE.Vector3(0, 2.5, 0));
    const lookTarget = kayakGltf.position.clone().add(new THREE.Vector3(0, 1.5, 0));
    smoothLookAt.copy(lookTarget);
    const m = new THREE.Matrix4().lookAt(introToPos, lookTarget, new THREE.Vector3(0, 1, 0));
    introToQuat.setFromRotationMatrix(m);
  }

  introing = true;
  introT = 0;
});

fly.addEventListener('lock', () => {
  flyMode = true;
  overlay.style.display = 'none';
  modeLabel.textContent = gravityMode ? 'WALK' : 'FLY';
});

fly.addEventListener('unlock', () => {
  flyMode = false;
  gravityMode = false;
  if (kayakGltf) {
    smoothLookAt.set(kayakGltf.position.x, kayakGltf.position.y + 1.5, kayakGltf.position.z);
    playMode = true;
    modeLabel.textContent = 'PLAY';
  } else {
    modeLabel.textContent = 'ORBIT';
  }
});

function enterFly() { fly.lock(); }
function exitFly()  { fly.unlock(); }

// Keys
const keys = new Set();
window.addEventListener('keydown', e => {
  keys.add(e.code);
  if (e.code === 'KeyG' && flyMode) toggleGravity();
  if (e.code === 'KeyF' && playMode) { playMode = false; fly.lock(); }
  if (e.code === 'Escape' && flyMode) exitFly();
  if (e.code === 'Escape' && !flyMode) {
    playMode = !playMode;
    if (playMode && kayakGltf) smoothLookAt.set(kayakGltf.position.x, kayakGltf.position.y + 1.5, kayakGltf.position.z);
    modeLabel.textContent = playMode ? 'PLAY' : 'ORBIT';
  }
  if (e.code === 'KeyP') {
    const p = camera.position;
    const d = new THREE.Vector3();
    camera.getWorldDirection(d);
    console.log(`position: (${p.x.toFixed(1)}, ${p.y.toFixed(1)}, ${p.z.toFixed(1)})  direction: (${d.x.toFixed(3)}, ${d.y.toFixed(3)}, ${d.z.toFixed(3)})`);
  }
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
let mouseX = innerWidth / 2, mouseY = innerHeight / 2;

window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

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
    const ndcX = (mouseX / innerWidth) * 2 - 1;
    const ndcY = -(mouseY / innerHeight) * 2 + 1;
    const zoomDir = new THREE.Vector3(ndcX, ndcY, 0.5)
      .unproject(camera)
      .sub(camera.position)
      .normalize();
    camera.position.addScaledVector(zoomDir, e.deltaY * 0.15);
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
const smoothLookAt = new THREE.Vector3();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  // Animate rapids
  rapidsMat.uniforms.time.value += dt;

  // Intro fly-in
  if (introing) {
    introT += dt / INTRO_DUR;
    const t = Math.min(introT, 1);
    const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    camera.position.lerpVectors(introFromPos, introToPos, ease);
    camera.quaternion.slerpQuaternions(introFromQuat, introToQuat, ease);
    if (t >= 1) { introing = false; playMode = true; }
    renderer.render(scene, camera);
    return;
  }

  // 3rd person kayak control
  if (playMode && kayakGltf) {
    const turnSpeed = 0.9;
    const moveSpeed = 5;

    if (keys.has('KeyA')) kayakerYaw += turnSpeed * dt;
    if (keys.has('KeyD')) kayakerYaw -= turnSpeed * dt;

    kayakGltf.rotation.y = kayakerYaw + Math.PI / 2;

    const forward = new THREE.Vector3(Math.sin(kayakerYaw), 0, Math.cos(kayakerYaw));
    if (keys.has('KeyW')) kayakGltf.position.addScaledVector(forward, moveSpeed * dt);
    if (keys.has('KeyS')) kayakGltf.position.addScaledVector(forward, -moveSpeed * dt);

    // Snap kayaker to terrain surface, store terrain Y for camera
    let terrainY = kayakGltf.position.y;
    if (terrain) {
      raycaster.set(
        new THREE.Vector3(kayakGltf.position.x, kayakGltf.position.y + 20, kayakGltf.position.z),
        downVec
      );
      const hits = raycaster.intersectObject(terrain, true);
      if (hits.length > 0) {
        terrainY = hits[0].point.y;
        kayakGltf.position.y += (terrainY + 0.6 - kayakGltf.position.y) * 0.18;
      }
    }

    // Camera follows behind and above
    const behind = new THREE.Vector3(-Math.sin(kayakerYaw), 0, -Math.cos(kayakerYaw));
    const targetCamPos = kayakGltf.position.clone()
      .addScaledVector(behind, 6)
      .add(new THREE.Vector3(0, 2.5, 0));

    // Lift camera above terrain at its own XZ position
    if (terrain) {
      raycaster.set(new THREE.Vector3(targetCamPos.x, targetCamPos.y + 30, targetCamPos.z), downVec);
      const ch = raycaster.intersectObject(terrain, true);
      if (ch.length > 0) targetCamPos.y = Math.max(targetCamPos.y, ch[0].point.y + 3.0);

      // Line-of-sight from kayaker to camera — if blocked by a wall, push camera up
      const origin = kayakGltf.position.clone().add(new THREE.Vector3(0, 1, 0));
      const toCam = targetCamPos.clone().sub(origin);
      const dist = toCam.length();
      raycaster.set(origin, toCam.clone().normalize(), 0.3, dist);
      const wall = raycaster.intersectObject(terrain, true);
      if (wall.length > 0) {
        const pushUp = Math.min((dist - wall[0].distance) + 4.0, 10);
        targetCamPos.y = Math.max(targetCamPos.y, kayakGltf.position.y + pushUp);
      }
    }

    camera.position.lerp(targetCamPos, 0.04);

    // Push camera up if underground
    if (terrain) {
      raycaster.set(new THREE.Vector3(camera.position.x, camera.position.y + 30, camera.position.z), downVec);
      const post = raycaster.intersectObject(terrain, true);
      if (post.length > 0 && camera.position.y < post[0].point.y + 1.5) {
        camera.position.y = post[0].point.y + 1.5;
      }
    }

    // Smooth the lookAt so camera rotation doesn't jitter
    smoothLookAt.lerp(
      new THREE.Vector3(kayakGltf.position.x, kayakGltf.position.y + 1.5, kayakGltf.position.z),
      0.08
    );
    camera.lookAt(smoothLookAt);
  }

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
