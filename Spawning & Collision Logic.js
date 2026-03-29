// --- Inside animate() ---
if (score >= nextBossThreshold && !boss) {
    boss = new Boss();
    nextBossThreshold += 500;
}

if (boss) {
    boss.update();

    // Check collisions with player bullets
    bullets.forEach((bullet, bIdx) => {
        if (bullet.position.distanceTo(boss.mesh.position) < 1.2) {
            // BIG REWARD
            score += 250;
            spawnFloatingText("BOSS KILL! +250", boss.mesh.position, "#ff00ff");
            triggerFlash(0xff00ff, 1.5);
            triggerShake(500);
            
            // Clean up
            scene.remove(bullet);
            bullets.splice(bIdx, 1);
            boss.cleanup();
        }
    });
}
