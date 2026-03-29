async function checkPB(currentTimeMs) {
    const data = await fetchLeaderboard(playerID);
    
    if (currentTimeMs < data.personalBest || !data.personalBest) {
        // --- PERSONAL BEST CEBRATION ---
        triggerGoldCelebration();
        spawnFloatingText("NEW PERSONAL BEST!", {x: 0, y: 0, z: 0}, "#ffd700");
        
        // Play a "Triumphant" sound from FreeSound.org
        // Search "Gold Chime" or "Success"
        if (victoryChime) victoryChime.play();
    }
}

function triggerGoldCelebration() {
    // Spawn multiple gold explosions across the screen
    for(let i = 0; i < 5; i++) {
        setTimeout(() => {
            explosions.push(new GoldExplosion(
                (Math.random() - 0.5) * 10, 
                (Math.random() - 0.5) * 5, 
                0
            ));
        }, i * 200);
    }
}
