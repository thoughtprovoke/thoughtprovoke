// Load the power-up chime
const powerUpSound = new THREE.Audio(listener);
audioLoader.load('sounds/kastenfrosch_powerup.mp3', (buffer) => {
    powerUpSound.setBuffer(buffer);
    powerUpSound.setVolume(0.6);
});

// Trigger in your collision logic
if (playerCollidesWithPowerUp) {
    if (powerUpSound.isPlaying) powerUpSound.stop();
    powerUpSound.play();
}
