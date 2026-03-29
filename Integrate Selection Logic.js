function setDifficulty(level) {
    // 1. Update the configuration
    currentConfig = DIFFICULTY[level];
    
    // 2. Play the corresponding sound
    Object.values(menuSounds).forEach(s => { if(s.isPlaying) s.stop(); });
    if (menuSounds[level]) menuSounds[level].play();

    // 3. Highlight the button in the UI
    document.querySelectorAll('#difficulty-menu button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText === level) btn.classList.add('active');
    });

    // 4. Subtle visual tweak (e.g., increase fog for "windy" medium)
    if (level === 'MEDIUM') {
        scene.fog.density = 0.08;
    } else {
        scene.fog.density = 0.04;
    }
}
