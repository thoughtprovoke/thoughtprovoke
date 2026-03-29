let currentWave = 1;

function checkWaveClear() {
    if (invaders.length === 0) {
        currentWave++;
        
        // 1. Visual: Big Cyan Flash + "WAVE COMPLETE" text
        triggerFlash(0x00ffff, 1.0);
        spawnFloatingText(`WAVE ${currentWave}`, {x: 0, y: 0, z: 0}, "#00ffff");

        // 2. Progressive Difficulty Spike
        // Speed up invaders by 20% each wave
        invaderMoveSpeed = currentConfig.speed * (1 + (currentWave * 0.2));
        // Increase enemy fire rate
        enemyShootThreshold *= 0.9; 

        // 3. Respawn the Grid
        setTimeout(() => {
            createInvaderGrid(); // Your original grid setup function
            if (powerUpTimer > 0) powerUpTimer += 100; // Reward: bonus time
        }, 1500);
    }
}
