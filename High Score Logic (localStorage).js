const MAX_HIGH_SCORES = 5;

function saveHighScore(score) {
    // 1. Get existing scores or empty array
    const highScores = JSON.parse(localStorage.getItem('spaceInvaderScores')) || [];
    
    // 2. Add new score, sort highest to lowest, and trim
    highScores.push(score);
    highScores.sort((a, b) => b - a);
    const topScores = highScores.slice(0, MAX_HIGH_SCORES);
    
    // 3. Save back to localStorage
    localStorage.setItem('spaceInvaderScores', JSON.stringify(topScores));
    return topScores;
}

function showGameOver(currentScore) {
    gameStarted = false; // Stop game loop logic
    document.getElementById('game-over-screen').style.display = 'flex';
    document.getElementById('final-score').innerText = currentScore;

    const topScores = saveHighScore(currentScore);
    const list = document.getElementById('score-list');
    list.innerHTML = topScores.map(s => `<li>${s} pts</li>`).join('');
}
