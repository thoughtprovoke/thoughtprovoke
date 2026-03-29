const trails = [];

function createTrail() {
    const geo = new THREE.SphereGeometry(0.05, 4, 4);
    const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.8 });
    const p = new THREE.Mesh(geo, mat);
    
    // Position at ship's "exhaust" (slightly behind)
    p.position.set(player.position.x + (Math.random() - 0.5) * 0.5, player.position.y - 0.3, 0);
    p.life = 1.0;
    scene.add(p);
    trails.push(p);
}

// Inside your animate() loop:
if ((keys['ArrowLeft'] || keys['ArrowRight']) && Math.random() > 0.5) {
    createTrail();
}

trails.forEach((p, i) => {
    p.life -= 0.05;
    p.position.y -= 0.1; // Drift down
    p.scale.set(p.life, p.life, p.life);
    p.material.opacity = p.life;
    
    if (p.life <= 0) {
        scene.remove(p);
        trails.splice(i, 1);
    }
});
