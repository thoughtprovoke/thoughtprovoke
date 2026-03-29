async function submitScore(playerName, finalScore) {
    const response = await fetch('http://your-server-ip:3000/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: playerName, score: finalScore })
    });
    
    if (response.ok) {
        console.log("Global score updated!");
        loadLeaderboard(); // Refresh the UI
    }
}
