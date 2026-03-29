function endSequence(isWin) {
    gameStarted = false; // Stop the animate() loops
    
    const screen = document.getElementById('results-screen');
    const title = document.getElementById('results-title');
    
    // 1. Set Visuals
    title.innerText = isWin ? "GALAXY SAVED" : "EARTH FALLEN";
    screen.className = isWin ? "win" : "loss";
    document.getElementById('results-score').innerText = score;
    
    // 2. Play Final Sound (Win Chime vs Low Drone)
    isWin ? winSound.play() : lossSound.play();

    // 3. Process High Scores
    const name = isWin ? prompt("ACE PILOT! Enter your initials:") : "GUEST";
    handleHighScores(name, score);
    
    screen.style.display = 'flex';
}
