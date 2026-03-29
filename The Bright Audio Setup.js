const powerUpSound = new THREE.Audio(listener);
audioLoader.load('sounds/bright_chime.mp3', (buffer) => {
    powerUpSound.setBuffer(buffer);
    powerUpSound.setVolume(0.8);
    // Add a high-pass filter if you want it to sound even "tinklier"
});
