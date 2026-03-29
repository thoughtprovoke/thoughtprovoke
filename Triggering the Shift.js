function startNewWave() {
    oldWaveColor.copy(targetWaveColor); // Current becomes Old
    targetWaveColor.set(getWaveColor(currentWave)); // Get new Red/Yellow/etc.
    lerpTimer = LERP_DURATION;
    
    createInvaderGrid(); // Spawn new invaders with the 'Old' color initially
}
