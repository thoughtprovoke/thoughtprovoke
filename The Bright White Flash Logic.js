function triggerPowerUpFlash() {
    // 1. Trigger the intense White Flash
    triggerFlash(0xffffff, 1.5); 
    
    // 2. Play the "Power Up, Bright" chime from FreeSound.org
    if (powerUpSound.isPlaying) powerUpSound.stop();
    powerUpSound.play();

    // 3. Trigger a heavy screen shake to simulate the "energy burst"
    triggerShake(400); 
}
