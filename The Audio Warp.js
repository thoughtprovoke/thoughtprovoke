function applyAudioWarp() {
    // Pitch down the background music or ambient hum
    if (ambientSpaceSound) {
        ambientSpaceSound.setPlaybackRate(timeScale); 
    }
}
