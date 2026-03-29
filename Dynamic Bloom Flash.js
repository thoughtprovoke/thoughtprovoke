function animate() {
    requestAnimationFrame(animate);

    if (boss && boss.state === 'firing') {
        // Rapidly spike bloom strength to 2.8
        bloomPass.strength = THREE.MathUtils.lerp(bloomPass.strength, 2.8, 0.2);
    } else {
        // Smoothly return to standard atmospheric glow (1.5)
        bloomPass.strength = THREE.MathUtils.lerp(bloomPass.strength, 1.5, 0.05);
    }

    composer.render();
}
