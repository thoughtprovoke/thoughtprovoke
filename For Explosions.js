// Inside your collision detection
if (bullet.position.distanceTo(invader.position) < 0.6) {
    if (explosionSound.isPlaying) explosionSound.stop();
    explosionSound.play();
    // ... rest of your explosion code
}
