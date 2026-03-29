const droneSound = new THREE.Audio(listener);
audioLoader.load('sounds/space_drone.mp3', (buffer) => {
    droneSound.setBuffer(buffer);
    droneSound.setLoop(true);
    droneSound.setVolume(0.2);
    droneSound.play();
});

// Inside animate():
if (droneSound.isPlaying) {
    // Volume climbs with combo (capped at 1.0)
    const targetVol = 0.2 + (Math.min(comboCount, 10) * 0.08);
    droneSound.setVolume(THREE.MathUtils.lerp(droneSound.getVolume(), targetVol, 0.1));
}
