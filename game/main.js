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
const waterDetail = textureLoader.load('./Water Texture 002/Water_002_NORM.jpg', t => {
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
});
const waterRoughness = textureLoader.load('./Water Texture 002/Water_002_ROUGH.jpg', t => {
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
    rockColorMap:      { value: rockColor },
    rockNormalMap:     { value: rockNormal },
    rockRoughnessMap:  { value: rockRoughness },
    waterDetailMap:    { value: waterDetail },
    waterRoughnessMap: { value: waterRoughness },
    sunDir:    { value: new THREE.Vector3(600, 300, 100).normalize() },
    sunColor:  { value: new THREE.Color(1.0, 0.98, 0.9) },
  },
  vertexColors: true,
  vertexShader: /* glsl */`
    attribute float wetRock;
    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec3 vColor;
    varying float vWetRock;

    void main() {
      vUv = uv;
      vColor = color.rgb;
      vWetRock = wetRock;
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
    uniform sampler2D waterDetailMap;
    uniform sampler2D waterRoughnessMap;
    uniform vec3 sunDir;
    uniform vec3 sunColor;

    varying vec2 vUv;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec3 vColor;
    varying float vWetRock;

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

      // Slope-based whiteness — steep = whitewater, flat = calm
      float slope = 1.0 - abs(vWorldNormal.y);
      float slopeFoam = smoothstep(0.001, 0.02, slope) * waterMask;

      // Foam from normal map turbulence
      float foam = smoothstep(0.0, 0.6, (nt1.z + nt2.z) * 0.5) * waterMask;

      // Water 002 detail — only on calm water
      vec2 detailUv = vWorldPos.zx * 0.12 + vec2(time * -0.3, 0.0);
      vec3 wd = texture2D(waterDetailMap, detailUv).rgb * 2.0 - 1.0;
      vec3 calmWaterNorm = normalize(tn + wd * (1.0 - slopeFoam) * 1.2);

      // Blended normal
      vec3 N = normalize(mix(
        vWorldNormal + rockNorm * 0.6,
        vWorldNormal + calmWaterNorm * 2.5,
        waterMask
      ));

      // Lighting
      float diff = max(dot(N, sunDir), 0.0);
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      vec3 halfVec = normalize(sunDir + viewDir);
      float spec = pow(max(dot(N, halfVec), 0.0), 128.0);

      // Rock color with lighting
      vec3 rockLit = rockAlbedo * (0.18 + 0.82 * diff) * sunColor
                   + sunColor * spec * 0.05 * (1.0 - rockRough);

      // Slope drives base color: flat = teal, steep = white
      // Normal map adds subtle surface churn on top
      vec3 waterColor = mix(vec3(0.08, 0.45, 0.42), vec3(1.0, 1.0, 1.0), slopeFoam);
      waterColor = mix(waterColor, vec3(1.0, 1.0, 1.0), foam * 0.25 * slopeFoam);
      float waterRough = texture2D(waterRoughnessMap, uv1).r;
      float waterSpec = mix(spec * (1.0 - waterRough) * 1.2, spec * 0.9, slopeFoam);
      vec3 waterLit = waterColor * (0.4 + 0.6 * diff) + vec3(waterSpec);

      // Wet rock — exponential falloff: full effect at boundary, drops fast further out
      float wetF = smoothstep(0.0, 0.88, vWetRock);
      wetF = wetF * wetF * wetF;
      rockLit *= 1.0 - wetF * 0.60 * (1.0 - waterMask);

      vec3 color = mix(rockLit, waterLit, waterMask);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
});

// Spray particle system
const SPRAY_COUNT = 2000;
const MIST_COUNT  = 5000;
const sprayPos   = new Float32Array(SPRAY_COUNT * 3);
const sprayVel   = new Float32Array(SPRAY_COUNT * 3);
const sprayLife  = new Float32Array(SPRAY_COUNT);
const sprayFloor = new Float32Array(SPRAY_COUNT).fill(-999);
const sprayGeo   = new THREE.BufferGeometry();
sprayGeo.setAttribute('position', new THREE.BufferAttribute(sprayPos, 3));
const sprayMat   = new THREE.PointsMaterial({ color: 0xddf0f0, size: 0.08, transparent: true, opacity: 0.3, depthWrite: false, sizeAttenuation: true });
const sprayMesh  = new THREE.Points(sprayGeo, sprayMat);
sprayMesh.frustumCulled = false;
scene.add(sprayMesh);

const mistPos  = new Float32Array(MIST_COUNT * 3);
const mistVel  = new Float32Array(MIST_COUNT * 3);
const mistLife = new Float32Array(MIST_COUNT);
const mistGeo  = new THREE.BufferGeometry();
mistGeo.setAttribute('position', new THREE.BufferAttribute(mistPos, 3));
const mistMat  = new THREE.PointsMaterial({ color: 0xe8f4f4, size: 0.14, transparent: true, opacity: 0.1, depthWrite: false, sizeAttenuation: true });
const mistMesh = new THREE.Points(mistGeo, mistMat);
mistMesh.frustumCulled = false;
scene.add(mistMesh);
let spawnFlat  = [];
let spawnCount = 0;
let spawnCdf   = null;

function initSpray(spawns) {
  spawnFlat  = spawns;
  spawnCount = spawns.length / 6;

  // Build weighted CDF by local whitewater density (grid-based)
  const GRID = 8; // world-unit cell size
  const gridMap = new Map();
  for (let i = 0; i < spawnCount; i++) {
    const gx = Math.floor(spawnFlat[i*6]   / GRID);
    const gz = Math.floor(spawnFlat[i*6+2] / GRID);
    const key = gx * 100000 + gz;
    gridMap.set(key, (gridMap.get(key) || 0) + 1);
  }
  const weights = new Float32Array(spawnCount);
  let total = 0;
  for (let i = 0; i < spawnCount; i++) {
    const gx = Math.floor(spawnFlat[i*6]   / GRID);
    const gz = Math.floor(spawnFlat[i*6+2] / GRID);
    let count = 0;
    for (let dx = -1; dx <= 1; dx++)
      for (let dz = -1; dz <= 1; dz++)
        count += gridMap.get((gx+dx)*100000 + (gz+dz)) || 0;
    const steep = spawnFlat[i*6+5];
    const w = count > 3 ? count * count * (1 + steep * 4) : 0;
    weights[i] = w;
    total += w;
  }
  spawnCdf = new Float32Array(spawnCount);
  let acc = 0;
  for (let i = 0; i < spawnCount; i++) {
    acc += weights[i] / total;
    spawnCdf[i] = acc;
  }

  for (let i = 0; i < SPRAY_COUNT; i++) sprayLife[i] = Math.random() * 1.2;
  for (let i = 0; i < MIST_COUNT;  i++) mistLife[i]  = Math.random() * 2.0;
}

function weightedSpawnIndex() {
  const r = Math.random();
  let lo = 0, hi = spawnCount - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (spawnCdf[mid] < r) lo = mid + 1; else hi = mid;
  }
  return lo;
}

let sprayFrame = 0;

function spawnParticle(i) {
  const s = weightedSpawnIndex() * 6;
  const px = spawnFlat[s]   + (Math.random()-0.5) * 0.8;
  const py = spawnFlat[s+1] + Math.random() * 0.2;
  const pz = spawnFlat[s+2] + (Math.random()-0.5) * 0.8;
  const steep = spawnFlat[s+5];
  sprayPos[i*3] = px; sprayPos[i*3+1] = py; sprayPos[i*3+2] = pz;
  const flowSpeed = steep * (Math.random() * 3.0 + 1.5);
  sprayVel[i*3]   = (Math.random()-0.5) * 1.0;
  sprayVel[i*3+1] = steep * (Math.random() * 2.5 + 1.0);
  sprayVel[i*3+2] = flowSpeed + (Math.random()-0.5) * 0.6; // always +Z downstream
  sprayLife[i]    = 4.0; // long enough to complete full arc
  sprayFloor[i]   = py - 0.3; // will be updated dynamically when falling
}

function updateSpray(dt) {
  if (spawnCount === 0) return;
  sprayFrame++;
  for (let i = 0; i < SPRAY_COUNT; i++) {
    sprayLife[i] -= dt;
    if (sprayLife[i] <= 0) { spawnParticle(i); continue; }

    sprayPos[i*3]   += sprayVel[i*3]   * dt;
    sprayPos[i*3+1] += sprayVel[i*3+1] * dt;
    sprayPos[i*3+2] += sprayVel[i*3+2] * dt;
    sprayVel[i*3+1] -= 7 * dt; // softer gravity for a nice arc

    // Floor check only while falling, spread across frames for perf
    if (sprayVel[i*3+1] < 0 && terrain && (sprayFrame % 5 === i % 5)) {
      raycaster.set(new THREE.Vector3(sprayPos[i*3], sprayPos[i*3+1] + 3, sprayPos[i*3+2]), downVec);
      const hits = raycaster.intersectObject(terrain, true);
      if (hits.length > 0 && sprayPos[i*3+1] <= hits[0].point.y + 0.15) {
        spawnParticle(i);
      }
    }
  }
  sprayGeo.attributes.position.needsUpdate = true;

  // Mist layer — wider spread, slower, longer life
  for (let i = 0; i < MIST_COUNT; i++) {
    mistLife[i] -= dt;
    if (mistLife[i] <= 0) {
      const s = weightedSpawnIndex() * 6;
      mistPos[i*3]   = spawnFlat[s]   + (Math.random()-0.5) * 2.5;
      mistPos[i*3+1] = spawnFlat[s+1] + Math.random() * 0.3;
      mistPos[i*3+2] = spawnFlat[s+2] + (Math.random()-0.5) * 2.5;
      mistVel[i*3]   = (Math.random()-0.5) * 0.6;
      mistVel[i*3+1] = Math.random() * 1.5 + 0.3;
      mistVel[i*3+2] = (Math.random() * 1.5 + 0.5);
      mistLife[i]    = Math.random() * 2.0 + 1.0;
    } else {
      mistPos[i*3]   += mistVel[i*3]   * dt;
      mistPos[i*3+1] += mistVel[i*3+1] * dt;
      mistPos[i*3+2] += mistVel[i*3+2] * dt;
      mistVel[i*3+1] -= 4 * dt;
    }
  }
  mistGeo.attributes.position.needsUpdate = true;
}

// Spread "wet rock" outward from water boundary vertices, N face-layers deep
function computeWetRock(geo, layers = 5, decay = 0.72) {
  const idx = geo.index;
  const col = geo.attributes.color;
  if (!idx || !col) return;
  const vCount = col.count;
  const fCount = idx.count / 3;

  const isWater = new Uint8Array(vCount);
  for (let i = 0; i < vCount; i++)
    isWater[i] = (col.getX(i) + col.getY(i) + col.getZ(i)) > 0.3 ? 1 : 0;

  const wet = new Float32Array(vCount);
  // Seed: rock vertices that share a face with a water vertex
  for (let f = 0; f < fCount; f++) {
    const a = idx.getX(f*3), b = idx.getX(f*3+1), c = idx.getX(f*3+2);
    if (isWater[a] || isWater[b] || isWater[c]) {
      if (!isWater[a]) wet[a] = 1.0;
      if (!isWater[b]) wet[b] = 1.0;
      if (!isWater[c]) wet[c] = 1.0;
    }
  }

  // Propagate outward through rock faces
  const tmp = new Float32Array(vCount);
  for (let layer = 0; layer < layers; layer++) {
    tmp.set(wet);
    for (let f = 0; f < fCount; f++) {
      const a = idx.getX(f*3), b = idx.getX(f*3+1), c = idx.getX(f*3+2);
      if (isWater[a] || isWater[b] || isWater[c]) continue;
      const mx = Math.max(wet[a], wet[b], wet[c]);
      if (mx === 0) continue;
      const s = mx * decay;
      if (s > tmp[a]) tmp[a] = s;
      if (s > tmp[b]) tmp[b] = s;
      if (s > tmp[c]) tmp[c] = s;
    }
    wet.set(tmp);
  }
  geo.setAttribute('wetRock', new THREE.BufferAttribute(wet, 1));
}

// Terrain — apply rapids material
let terrain = null;
const loader = new GLTFLoader();
loader.load('./GREATFALLS.glb', ({ scene: gltf }) => {
  gltf.traverse(obj => {
    if (obj.isMesh) {
      obj.geometry.computeVertexNormals();
      computeWetRock(obj.geometry);
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

  // Extract whitewater vertices — store pos + flow direction + steepness (6 floats each)
  const spraySpawns = [];
  if (terrainMesh) {
    const pA = terrainMesh.geometry.attributes.position;
    const cA = terrainMesh.geometry.attributes.color;
    const nA = terrainMesh.geometry.attributes.normal;
    if (cA && nA) {
      const sv = new THREE.Vector3();
      for (let i = 0; i < pA.count; i += 4) {
        const bright = cA.getX(i) + cA.getY(i) + cA.getZ(i);
        const ny = Math.abs(nA.getY(i));
        if (bright > 0.5 && ny < 0.92) {
          sv.fromBufferAttribute(pA, i).applyMatrix4(terrainMesh.matrixWorld);
          const steep = 1.0 - ny;
          // flow dir = downhill = negative of normal's XZ projected
          let fx = -nA.getX(i), fz = -nA.getZ(i);
          const fl = Math.sqrt(fx*fx + fz*fz);
          if (fl > 0) { fx /= fl; fz /= fl; }
          spraySpawns.push(sv.x, sv.y, sv.z, fx, fz, steep);
        }
      }
    }
  }
  initSpray(spraySpawns);

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
  if (e.code === 'Space' && playMode) triggerBoof();
  if (e.code === 'KeyQ' && playMode) triggerRoll();
  if (e.code === 'KeyR' && playMode) resetKayak();
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
let currentSteepness = 0; // smoothed terrain slope at kayak — drives current force and camera lag
let kayakVelX = 0, kayakVelZ = 0; // flow-induced XZ velocity
let paddleSpeed = 0;              // player input speed with easing
let boofPitch = 0, boofCooldown = 0, boofVelY = 0, isBoofing = false;
let rockFactor = 0; // smoothed 0=water 1=rock at kayak position
let sphereBowRock = 0, sphereSternRock = 0;
let rollAngle = 0, rollTarget = 0; // 0 = upright, Math.PI = upside down
let kayakAngVel = 0; // persistent angular velocity used when upside down
// Flat-water flow direction from shader UV animation:
// uv1 scrolls (0, -0.4) → world +Z*0.4; uv2 scrolls (-0.05,-0.25) → world (+X*0.05, +Z*0.25)
// Combined and normalized: (0.077, 0, 0.997)
const FLOW_X = 0.077, FLOW_Z = 0.997;
let verticalVelocity = 0;
const GRAVITY = -25;
const PLAYER_HEIGHT = 1.8;
const raycaster = new THREE.Raycaster();
const downVec  = new THREE.Vector3(0, -1, 0);
const flatFwd  = new THREE.Vector3();
const kayakFwd = new THREE.Vector3();
const kayakRgt = new THREE.Vector3();

// Debug markers — scene-level, gravity-dropped onto terrain each frame
const dbGeo = new THREE.SphereGeometry(0.2, 8, 8);
const debugBowMesh   = new THREE.Mesh(dbGeo, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
const debugSternMesh = new THREE.Mesh(dbGeo, new THREE.MeshBasicMaterial({ color: 0x0000ff }));
scene.add(debugBowMesh);
scene.add(debugSternMesh);

function resetKayak() {
  if (!kayakGltf) return;
  kayakGltf.position.set(16, -1, -242);
  kayakerYaw = 0;
  kayakVelX = 0; kayakVelZ = 0; paddleSpeed = 0;
  boofVelY = 0; isBoofing = false; boofPitch = 0; boofCooldown = 0;
  rollAngle = 0; rollTarget = 0; kayakAngVel = 0;
  snapKayakerToTerrain();
  if (playMode) smoothLookAt.set(kayakGltf.position.x, kayakGltf.position.y + 1.5, kayakGltf.position.z);
}

function triggerRoll() {
  rollTarget = rollTarget === 0 ? Math.PI : 0;
  kayakAngVel = 0;
}

function triggerBoof() {
  if (boofCooldown > 0 || !kayakGltf) return;
  boofCooldown = 1.2;
  boofPitch = -0.15;
  boofVelY = 2.5;
  isBoofing = true;
  kayakVelX += Math.sin(kayakerYaw) * 3;
  kayakVelZ += Math.cos(kayakerYaw) * 3;
}

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
  updateSpray(dt);

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
    const upsideDown = rollTarget === Math.PI;
    const flipMult   = upsideDown ? 2.5 : 1.0;

    if (!upsideDown) {
      if (keys.has('KeyA')) kayakerYaw += turnSpeed * dt;
      if (keys.has('KeyD')) kayakerYaw -= turnSpeed * dt;
    }

    kayakFwd.set(Math.sin(kayakerYaw), 0, Math.cos(kayakerYaw));

    // W/S — ease into and out of full speed (disabled upside down)
    const targetPaddle = (!upsideDown && keys.has('KeyW')) ? moveSpeed : (!upsideDown && keys.has('KeyS')) ? -moveSpeed : 0;
    paddleSpeed += (targetPaddle - paddleSpeed) * Math.min(1, dt * 1.5);
    kayakGltf.position.x += Math.sin(kayakerYaw) * paddleSpeed * dt;
    kayakGltf.position.z += Math.cos(kayakerYaw) * paddleSpeed * dt;

    // Cast bow and stern straight down onto terrain, then position and rotate kayak from those hits
    if (terrain) {
      const bowOrigin   = kayakGltf.position.clone().addScaledVector(kayakFwd,  0.8);
      const sternOrigin = kayakGltf.position.clone().addScaledVector(kayakFwd, -0.8);
      bowOrigin.y   += 20;
      sternOrigin.y += 20;

      raycaster.set(bowOrigin, downVec);
      const bowHits = raycaster.intersectObject(terrain, true);
      raycaster.set(sternOrigin, downVec);
      const sternHits = raycaster.intersectObject(terrain, true);

      if (bowHits.length > 0 && sternHits.length > 0) {
        const bp = bowHits[0].point;
        const sp = sternHits[0].point;
        const terrainY = (bp.y + sp.y) / 2 + 0.6 * Math.cos(rollAngle);

        if (isBoofing) {
          // Airborne: gravity drives Y; spheres travel with the kayak
          boofVelY -= 18 * dt;
          kayakGltf.position.y += boofVelY * dt;
          if (kayakGltf.position.y <= terrainY) {
            boofVelY = 0;
            isBoofing = false;
          }
          debugBowMesh.position.copy(kayakGltf.position).addScaledVector(kayakFwd,  0.8);
          debugSternMesh.position.copy(kayakGltf.position).addScaledVector(kayakFwd, -0.8);
        } else {
          // Grounded: snap to terrain contacts
          kayakGltf.position.y = (bp.y + sp.y) / 2 + 0.6 * Math.cos(rollAngle);
          debugBowMesh.position.copy(bp);
          debugSternMesh.position.copy(sp);
        }

        const dxz = Math.sqrt((bp.x - sp.x) ** 2 + (bp.z - sp.z) ** 2) || 0.001;
        const pitch = Math.atan2(sp.y - bp.y, dxz);
        rollAngle += (rollTarget - rollAngle) * Math.min(1, dt * 5);
        kayakGltf.rotation.set(rollAngle, kayakerYaw + Math.PI / 2, pitch + boofPitch, 'YXZ');

        // Sphere-level rock vs water — drives repulsion and pivot rotation
        const sphereBright = (hit) => {
          const c = hit.object.geometry.attributes.color, f = hit.face;
          return (c.getX(f.a)+c.getY(f.a)+c.getZ(f.a)+c.getX(f.b)+c.getY(f.b)+c.getZ(f.b)+c.getX(f.c)+c.getY(f.c)+c.getZ(f.c)) / 3;
        };
        const bowRock  = 1 - Math.max(0, Math.min(1, (sphereBright(bowHits[0])  - 0.1) / 0.4));
        const sternRock = 1 - Math.max(0, Math.min(1, (sphereBright(sternHits[0]) - 0.1) / 0.4));

        // Expose sphere rock values to the flow physics block below
        sphereBowRock = bowRock;
        sphereSternRock = sternRock;

        if (!upsideDown) {
          // Rock repels its sphere — net XZ push away from the rocky end
          const repel = (sternRock - bowRock) * 6;
          kayakVelX += kayakFwd.x * repel * dt;
          kayakVelZ += kayakFwd.z * repel * dt;

          // Asymmetric grip: water side pulls free end downstream, rocks pivot the other
          const lateral = kayakVelX * Math.cos(kayakerYaw) - kayakVelZ * Math.sin(kayakerYaw);
          kayakerYaw += lateral * (bowRock - sternRock) * 0.35 * dt;
        } else {
          // Upside down: rocks repel same as normal; spin only from asymmetric sphere contact
          const repel = (sternRock - bowRock) * 6;
          kayakVelX += kayakFwd.x * repel * dt;
          kayakVelZ += kayakFwd.z * repel * dt;
          const bowNorm2   = bowHits[0].face.normal.clone().transformDirection(bowHits[0].object.matrixWorld);
          const sternNorm2 = sternHits[0].face.normal.clone().transformDirection(sternHits[0].object.matrixWorld);
          const slopeDiff  = (1 - Math.abs(bowNorm2.y)) - (1 - Math.abs(sternNorm2.y));
          kayakAngVel += (sternRock - bowRock) * 2.0 * dt;
          kayakAngVel += slopeDiff * 0.4 * dt;
          kayakAngVel = Math.max(-1.5, Math.min(1.5, kayakAngVel));
          kayakAngVel *= 1 - 0.06 * dt;
          kayakerYaw += kayakAngVel * dt;
        }
      }
    }

    // Flow physics — flat water drifts gently downstream; whitewater gravity-slams the kayak
    if (terrain) {
      raycaster.set(new THREE.Vector3(kayakGltf.position.x, kayakGltf.position.y + 20, kayakGltf.position.z), downVec);
      const cHits = raycaster.intersectObject(terrain, true);
      if (cHits.length > 0) {
        const wn = cHits[0].face.normal.clone().transformDirection(cHits[0].object.matrixWorld);
        const slope = 1.0 - Math.abs(wn.y);
        currentSteepness += (slope - currentSteepness) * Math.min(1, dt * 4);

        // 0 in flat pools, ramps to 1 at steep rapids
        const rapid = Math.min(1, Math.max(0, (currentSteepness - 0.04) / 0.46));

        if (rapid < 0.02) {
          // Flat water: drift in the direction the water animation flows
          kayakVelX += (FLOW_X * 1.5 * flipMult - kayakVelX) * Math.min(1, dt * 2);
          kayakVelZ += (FLOW_Z * 1.5 * flipMult - kayakVelZ) * Math.min(1, dt * 2);
        } else {
          // Whitewater: gravity along slope — velocity builds fast, feels like a hit
          const il = 1.0 / Math.max(Math.sqrt(wn.x * wn.x + wn.z * wn.z), 1e-6);
          const force = rapid * 100 * flipMult;
          kayakVelX += wn.x * il * force * dt;
          kayakVelZ += wn.z * il * force * dt;
          // Drag caps terminal speed (~15 m/s at full rapid)
          kayakVelX *= 1.0 - 2.0 * dt;
          kayakVelZ *= 1.0 - 2.0 * dt;
        }
      }
      // Rock friction / upside-down bump
      if (cHits.length > 0) {
        const f = cHits[0].face;
        const col = cHits[0].object.geometry.attributes.color;
        const brightness = (
          col.getX(f.a) + col.getY(f.a) + col.getZ(f.a) +
          col.getX(f.b) + col.getY(f.b) + col.getZ(f.b) +
          col.getX(f.c) + col.getY(f.c) + col.getZ(f.c)
        ) / 3;
        const targetRock = 1 - Math.max(0, Math.min(1, (brightness - 0.1) / 0.4));
        rockFactor += (targetRock - rockFactor) * Math.min(1, dt * 6);
        // Both modes: beach when both spheres on rock; one in water slides free
        const bothOnRock = Math.min(sphereBowRock, sphereSternRock);
        const drag = bothOnRock * 10;
        kayakVelX -= kayakVelX * drag * dt;
        kayakVelZ -= kayakVelZ * drag * dt;
        paddleSpeed -= paddleSpeed * drag * dt;
      }

      kayakGltf.position.x += kayakVelX * dt;
      kayakGltf.position.z += kayakVelZ * dt;

      boofPitch += (0 - boofPitch) * Math.min(1, dt * 4);
      if (boofCooldown > 0) boofCooldown -= dt;
    }

    // Camera follows behind and above
    const targetCamPos = kayakGltf.position.clone()
      .addScaledVector(kayakFwd, -6)
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

    // Camera lag: tight in whitewater, relaxed in flat pools
    const camLerp = 0.04 + currentSteepness * 0.12;
    camera.position.lerp(targetCamPos, camLerp);

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
      0.08 + currentSteepness * 0.12
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
