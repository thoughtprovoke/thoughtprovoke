const menuSounds = {
    EASY: new THREE.Audio(listener),
    MEDIUM: new THREE.Audio(listener)
};

const audioLoader = new THREE.AudioLoader();

// Load Easy Chime
audioLoader.load('sounds/calm_chime.mp3', (buffer) => {
    menuSounds.EASY.setBuffer(buffer);
    menuSounds.EASY.setVolume(0.5);
});

// Load Medium Wind
audioLoader.load('sounds/space_wind.mp3', (buffer) => {
    menuSounds.MEDIUM.setBuffer(buffer);
    menuSounds.MEDIUM.setLoop(true); // Loop wind for a continuous feel
    menuSounds.MEDIUM.setVolume(0.4);
});
