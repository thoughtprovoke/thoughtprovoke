function triggerComboBreakHaptic() {
    // Mobile: One long, dull pulse
    if ("vibrate" in navigator) {
        navigator.vibrate(400); 
    }

    // Gamepads: Strong "heavy" rumble, no "weak" high-pitch
    const gamepads = navigator.getGamepads();
    for (const gp of gamepads) {
        if (gp?.vibrationActuator) {
            gp.vibrationActuator.playEffect("dual-rumble", {
                duration: 500,
                strongMagnitude: 0.8, // The heavy "thud"
                weakMagnitude: 0.0    // No sparkle
            });
        }
    }
}
