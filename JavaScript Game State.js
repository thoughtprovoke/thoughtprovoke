let gameStarted = false;
document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    gameStarted = true;
    // Resume audio context if it was suspended by the browser
    if (THREE.AudioContext.getContext().state === 'suspended') {
        THREE.AudioContext.getContext().resume();
    }
});
