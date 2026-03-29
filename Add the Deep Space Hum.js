const ambientDrone = new THREE.Audio(listener);
audioLoader.load('sounds/cinematic_drone.mp3', (buffer) => {
    ambientDrone.setBuffer(buffer);
    ambientDrone.setLoop(true);
    ambientDrone.setVolume(0.3);
    ambientDrone.play();
});

// Sync volume/pitch with game speed
function syncAmbient() {
    if (ambientDrone.isPlaying) {
        ambientDrone.setPlaybackRate(timeScale); // Deepens during Slow-Mo
    }
}
