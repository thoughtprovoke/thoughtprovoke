const menuSounds = {
    EASY: new THREE.Audio(listener),
    MEDIUM: new THREE.Audio(listener),
    HARD: new THREE.Audio(listener)
};

// Easy: Search "Calm Chime" by [Tritus](https://freesound.org)
audioLoader.load('sounds/calm_chime.mp3', (buffer) => {
    menuSounds.EASY.setBuffer(buffer);
});

// Medium: Search "Space Wind" by [The_Very_Real_Horst](https://freesound.org)
audioLoader.load('sounds/windy_space.mp3', (buffer) => {
    menuSounds.MEDIUM.setBuffer(buffer);
    menuSounds.MEDIUM.setLoop(true); // Wind feels better as a loop
});
