// Function to create a starfield layer
function createStarLayer(count, size, color, depth) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 100;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
        pos[i * 3 + 2] = Math.random() * -depth;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return new THREE.Points(geo, new THREE.PointsMaterial({ color, size, transparent: true }));
}

const farStars = createStarLayer(2000, 0.03, 0x4444ff, 100); // Slow, blue-tinted
const nearStars = createStarLayer(500, 0.12, 0xffffff, 50);   // Fast, bright white
scene.add(farStars, nearStars);

function updateStars(dt) {
    [farStars, nearStars].forEach((layer, idx) => {
        const pos = layer.geometry.attributes.position.array;
        const speed = (idx === 0 ? 0.02 : 0.1) * timeScale; // Near stars move 5x faster
        for (let i = 2; i < pos.length; i += 3) {
            pos[i] += speed;
            if (pos[i] > 5) pos[i] = -50;
        }
        layer.geometry.attributes.position.needsUpdate = true;
    });
}
