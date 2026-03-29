if (bullet.position.distanceTo(invader.position) < 0.6) {
    triggerFlash(60);   // Quick white flash (approx 4 frames)
    triggerShake(150);  // Longer screen shake
    // ... play explosion sound and spawn particles
}
