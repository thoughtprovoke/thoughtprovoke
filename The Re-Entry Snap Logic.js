// Inside your animate() loop:
if (powerUpTimer > 0) {
    powerUpTimer--;
    
    // Trigger the final snap at the very last frame
    if (powerUpTimer === 0) {
        triggerFlash(0xffffff, 0.8); // Final sharp White Flash
        
        // Reset everything to normal speed instantly
        timeScale = 1.0; 
        if (ambientSound) ambientSound.setPlaybackRate(1.0);
        
        // Play a "click" or "thud" sound to confirm re-entry
        if (snapSound) snapSound.play();
        
        // Haptic: One short, sharp tap
        if ("vibrate" in navigator) navigator.vibrate(50);
    }
}
