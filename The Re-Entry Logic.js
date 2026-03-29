// Inside your animate() loop:
if (powerUpTimer > 0 && powerUpTimer < 60) {
    // 1. Rapidly ramp up Time Scale (from 0.1 back to 1.0)
    timeScale = THREE.MathUtils.lerp(timeScale, 1.0, 0.1);
    
    // 2. Pitch Up the audio (from deep bass back to normal)
    if (ambientSound) {
        ambientSound.setPlaybackRate(timeScale);
    }
}
