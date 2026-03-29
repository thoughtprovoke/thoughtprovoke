// Inside PowerUp collision logic
if (this.mesh.position.distanceTo(player.position) < 0.8) {
    powerUpTimer = 300;
    
    // Haptic "Success" Pattern: Two quick pulses
    if ("vibrate" in navigator) {
        navigator.vibrate([100, 50, 100]); 
    }
    
    // Play a "Power Up" chime from FreeSound.org
    if (powerUpSound) powerUpSound.play();
    
    this.remove();
}
