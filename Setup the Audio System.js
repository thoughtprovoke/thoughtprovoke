const listener = new THREE.AudioListener();
camera.add(listener);

const audioLoader = new THREE.AudioLoader();
const shootSound = new THREE.Audio(listener);
const explosionSound = new THREE.Audio(listener);

// Load your sound files (MP3 or WAV)
audioLoader.load('sounds/laser.mp3', (buffer) => {
    shootSound.setBuffer(buffer);
    shootSound.setVolume(0.5);
});

audioLoader.load('sounds/explosion.mp3', (buffer) => {
    explosionSound.setBuffer(buffer);
    explosionSound.setVolume(0.7);
});
