function handleHighScores(name, newScore) {
    // Retrieve and parse existing scores
    let scores = JSON.parse(localStorage.getItem('spaceInvaderScores')) || [];
    
    // Add, sort (descending), and trim to top 5
    scores.push({ name, score: newScore });
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 5);
    
    localStorage.setItem('spaceInvaderScores', JSON.stringify(scores));
    
    // Display in the UI
    const list = document.getElementById('highscore-list');
    list.innerHTML = scores.map(s => `<li>${s.name}: ${s.score}</li>`).join('');
}
