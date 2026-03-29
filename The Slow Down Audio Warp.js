function updateAudioPitch(scale) {
    // Pitch down the main engine hum or background music
    if (ambientSound && ambientSound.isPlaying) {
        // scale goes from 1.0 (normal) to 0.1 (slow)
        ambientSound.setPlaybackRate(scale); 
    }
}
