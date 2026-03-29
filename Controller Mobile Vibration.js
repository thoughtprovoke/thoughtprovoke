function vibrateGamepad() {
    const gamepads = navigator.getGamepads();
    for (const gp of gamepads) {
        if (gp && gp.vibrationActuator) {
            gp.vibrationActuator.playEffect("dual-rumble", {
                startDelay: 0,
                duration: 200,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0,
            });
        }
    }
}
