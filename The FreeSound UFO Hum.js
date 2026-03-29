const ufoSound = new THREE.Audio(listener);
audioLoader.load('sounds/ufo_hum.mp3', (buffer) => {
    ufoSound.setBuffer(buffer);
    ufoSound.setLoop(true);
    ufoSound.setVolume(0.4);
});
