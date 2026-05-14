import * as THREE from 'three';

export function createKayak(hullColor = 0xcc2200) {
  const group = new THREE.Group();

  const hullMat  = new THREE.MeshStandardMaterial({ color: hullColor, roughness: 0.20, metalness: 0.08 });
  const darkMat  = new THREE.MeshStandardMaterial({ color: 0x111111,  roughness: 0.85 });
  const chimeMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a,  roughness: 0.55 });
  const coamMat  = new THREE.MeshStandardMaterial({ color: 0x222222,  roughness: 0.50 });
  const handleMat= new THREE.MeshStandardMaterial({ color: 0x999999,  roughness: 0.45 });

  // ── Hull body ─────────────────────────────────────────────────────────────
  // Pyranha Ripper: short & wide playboat, ~6.5ft × 24in.
  // CapsuleGeometry lies on side via rotation.z = PI/2.
  // After that rotation: local X → world Y (height), local Y → world X (length).
  // So: scale.x = height factor, scale.y = length factor, scale.z = width factor.
  const hull = new THREE.Mesh(new THREE.CapsuleGeometry(0.62, 1.9, 12, 26), hullMat);
  hull.rotation.z = Math.PI / 2;
  hull.scale.set(0.32, 1, 1.08);   // 0.40 tall · 3.14 long · 1.34 wide
  group.add(hull);
  // hull top ≈ y = 0.62 × 0.32 = +0.198

  // ── Deck — raised ridge running bow to stern ────────────────────────────
  // Sits on top of hull, narrower and taller, gives the crowned deck profile.
  const deck = new THREE.Mesh(new THREE.CapsuleGeometry(0.46, 1.5, 10, 22), hullMat);
  deck.rotation.z = Math.PI / 2;
  deck.scale.set(0.38, 0.96, 0.68);  // 0.35 tall above its center, narrower than hull
  deck.position.set(0, 0.18, 0);
  group.add(deck);

  // ── Hard chines — the defining visual knuckle of a planing hull ────────────
  const chineGeo = new THREE.BoxGeometry(2.80, 0.055, 0.06);
  for (const z of [-0.60, 0.60]) {
    const c = new THREE.Mesh(chineGeo, chimeMat);
    c.position.set(0, 0.01, z);
    group.add(c);
  }

  // ── Cockpit coaming — large oval rim, prominent on creek boats ─────────────
  // TorusGeometry in local XY plane. After rotation.x = PI/2 it lies horizontal.
  // scale.y compresses the local Y axis → makes it oval (shorter front-to-back).
  const coaming = new THREE.Mesh(
    new THREE.TorusGeometry(0.40, 0.070, 10, 34),
    coamMat
  );
  coaming.rotation.x = Math.PI / 2;
  coaming.scale.set(1, 0.60, 1);
  coaming.position.set(0, 0.30, 0);
  group.add(coaming);

  // Cockpit interior (dark oval well)
  const cockpit = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.06, 30), darkMat);
  cockpit.scale.set(1, 1, 0.60);
  cockpit.position.set(0, 0.27, 0);
  group.add(cockpit);

  // ── Grab handles — small loops at bow and stern ───────────────────────────
  const handleGeo = new THREE.TorusGeometry(0.062, 0.018, 6, 12);
  for (const x of [1.50, -1.50]) {
    const h = new THREE.Mesh(handleGeo, handleMat);
    h.rotation.y = Math.PI / 2;
    h.position.set(x, 0.12, 0);
    group.add(h);
  }

  return group;
}
