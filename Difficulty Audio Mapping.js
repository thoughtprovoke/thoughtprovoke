function setDifficulty(level) {
    currentConfig = DIFFICULTY[level];

    // 1. Stop all menu background sounds
    Object.values(menuSounds).forEach(s => { if(s.isPlaying) s.stop(); });

    // 2. Play level-specific audio
    if (level === 'EASY') {
        menuSounds.EASY.play();
    } else if (level === 'MEDIUM') {
        menuSounds.MEDIUM.play(); // Starts the looping wind
    } else if (level === 'HARD') {
        // --- SILENCE ---
        // No background audio plays. 
        // Optional: Trigger one single "Heartbeat" thud to signal danger.
        if (heartbeatSound) heartbeatSound.play();
    }

    updateMenuUI(level);
}
