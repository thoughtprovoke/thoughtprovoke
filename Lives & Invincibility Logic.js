let lives = 3;
let invincibilityTimer = 0;

function handlePlayerHit() {
    if (invincibilityTimer > 0) return; // Skip if already hit recently

    lives--;
    document.getElementById('lives-count').innerText = lives;

    if (lives <= 0) {
        showGameOver(score);
    } else {
        // --- Respawn Effects ---
        triggerFlash(0xff0000, 1.0); // Red Flash
        triggerShake(500);           // Heavy Shake
        invincibilityTimer = 120;    // ~2 seconds of safety
        
        // Reset player position
        player.position.x = 0;
        
        // Play "Player Hit" sound from FreeSound.org
        if (hitSound) hitSound.play();
    }
}
