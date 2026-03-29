function triggerPowerHaptics() {
    if ("vibrate" in navigator) {
        // Pattern: [hit, pause, small_hit, pause, tiny_hit]
        // 150ms burst, 50ms wait, 100ms burst, 50ms wait, 50ms burst
        navigator.vibrate([150, 50, 100, 50, 50]);
    }

    // For Gamepads (Xbox/PS5)
    const gamepads = navigator.getGamepads();
    for (const gp of gamepads) {
        if (gp?.vibrationActuator) {
            gp.vibrationActuator.playEffect("dual-rumble", {
                startDelay: 0,
                duration: 400,
                weakMagnitude: 1.0,  // High frequency (the "bright" part)
                strongMagnitude: 0.3 // Low frequency (the "thud")
            });
        }
    }
}
