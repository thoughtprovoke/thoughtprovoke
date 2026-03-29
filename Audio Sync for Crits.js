if (distance < 0.15) {
    explosionSound.setPlaybackRate(0.5); // Deeper, bassier boom
    explosionSound.setVolume(1.0);
    explosionSound.play();
} else {
    explosionSound.setPlaybackRate(1.0); // Standard explosion
    explosionSound.setVolume(0.5);
    explosionSound.play();
}
