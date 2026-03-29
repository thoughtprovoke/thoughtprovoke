enemyBullets.forEach((b, index) => {
    b.position.y -= 0.1 * timeScale; // Move down

    // Collision check
    if (b.position.distanceTo(player.position) < 0.6) {
        showGameOver(score);
        scene.remove(b);
        enemyBullets.splice(index, 1);
    }

    // Cleanup off-screen bullets
    if (b.position.y < -6) {
        scene.remove(b);
        enemyBullets.splice(index, 1);
    }
});
