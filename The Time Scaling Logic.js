let timeScale = 1.0;
let targetTimeScale = 1.0;

function triggerBulletTime(duration = 1000) {
    timeScale = 0.1; // Instant slow-mo
    targetTimeScale = 1.0; // We want to return to normal speed
}

// Inside your animate() loop:
function animate() {
    requestAnimationFrame(animate);

    // Smoothly return time to normal (Lerp)
    timeScale = THREE.MathUtils.lerp(timeScale, targetTimeScale, 0.02);

    // Apply timeScale to all movement logic:
    const dt = 0.1 * timeScale; // Delta time scaled by our effect

    // 1. Scaled Bullet Movement
    bullets.forEach(b => b.position.y += 2.0 * dt);

    // 2. Scaled Invader Movement
    invaders.forEach(inv => inv.position.x += 0.1 * dt);

    // 3. Scaled Particle Drift
    energyParticles.forEach(p => p.update(dt)); 

    renderer.render(scene, camera);
}
