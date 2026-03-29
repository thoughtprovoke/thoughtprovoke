function setDifficulty(level) {
    // 1. Update Config
    currentConfig = DIFFICULTY[level];
    
    // 2. Visual: Highlight the active button
    document.querySelectorAll('#difficulty-menu button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText === level) btn.classList.add('active');
    });

    // 3. Audio: Stop all and play the specific one
    Object.values(menuSounds).forEach(s => { if(s.isPlaying) s.stop(); });
    menuSounds[level].play();

    // 4. Subtle Scene Tweak
    if (level === 'MEDIUM') {
        // Increase Fog to match the "windy" vibe
        scene.fog.density = 0.08;
    } else {
        scene.fog.density = 0.04;
    }
}
