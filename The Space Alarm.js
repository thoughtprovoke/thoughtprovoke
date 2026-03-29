// Load the sound
const alarmSound = new THREE.Audio(listener);
audioLoader.load('sounds/space_alarm.mp3', (buffer) => {
    alarmSound.setBuffer(buffer);
    alarmSound.setLoop(true);
});

// Trigger in Boss Class
// boss.start() -> alarmSound.play();
// boss.cleanup() -> alarmSound.stop();
