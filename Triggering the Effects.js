if (bullet.position.distanceTo(invader.position) < 0.6) {
    triggerShake(150);      // Shakes the screen
    vibrateGamepad();       // Vibrates controller
    vibrateMobile();        // Vibrates phone
    // ... rest of explosion logic
}
