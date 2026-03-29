// --- Starfield Setup ---
const starCount = 3000;
const starGeo = new THREE.BufferGeometry();
const starPos = new Float32Array(starCount * 3);

for (let i = 0; i < starCount; i++) {
    starPos[i * 3] = (Math.random() - 0.5) * 100; // X spread
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 100; // Y spread
    starPos[i * 3 + 2] = Math.random() * -50; // Z depth (start far away)
}

starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
const starField = new THREE.Points(starGeo, starMat);
scene.add(starField);
