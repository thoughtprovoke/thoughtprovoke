document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('overlay').classList.add('hidden');
    // Start the game logic after a short delay for the fade
    setTimeout(() => { gameStarted = true; }, 800);
});
