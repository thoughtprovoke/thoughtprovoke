const slowMoSound = new THREE.Audio(listener);
audioLoader.load('sounds/slow_down_warp.mp3', (buffer) => {
    slowMoSound.setBuffer(buffer);
});

// Trigger during Power-Up
if (pickupPowerUp) {
    slowMoSound.play();
    triggerBulletTime(); // Sets timeScale to 0.1
}
