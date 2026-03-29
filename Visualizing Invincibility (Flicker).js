function animate() {
    requestAnimationFrame(animate);

    if (invincibilityTimer > 0) {
        invincibilityTimer--;
        // Flicker effect: visible every 5 frames
        player.visible = (Math.floor(Date.now() / 100) % 2 === 0);
    } else {
        player.visible = true;
    }

    // --- Update Enemy Bullet Collision ---
    enemyBullets.forEach((b, index) => {
        if (b.position.distanceTo(player.position) < 0.6) {
            handlePlayerHit(); // Use the new function instead of Game Over
            scene.remove(b);
            enemyBullets.splice(index, 1);
        }
    });

    renderer.render(scene, camera);
}
