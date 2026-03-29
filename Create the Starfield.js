const starCount = 2000;
const starGeo = new THREE.BufferGeometry();
const starPos = new Float32Array(starCount * 3);

for (let i = 0; i < starCount; i++) {
    starPos[i * 3] = (Math.random() - 0.5) * 50;  // X
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 50;  // Y
    starPos[i * 3 + 2] = Math.random() * -50;         // Z (Start in front of camera)
}

starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true });
const starField = new THREE.Points(starGeo, starMat);
scene.add(starField);
