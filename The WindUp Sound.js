const windUpSound = new THREE.Audio(listener);
audioLoader.load('sounds/pitch_up_warp.mp3', (buffer) => {
    windUpSound.setBuffer(buffer);
});

// Triggering the alert
if (powerUpTimer === 60) {
    windUpSound.play();
    // Add a quick Cyan-to-White flicker to warn the player
    triggerFlash(0x00ffff, 0.3); 
}
