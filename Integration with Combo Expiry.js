if (comboTimer > 0) {
    comboTimer--;
    if (comboTimer === 0 && comboCount > 1) { // Only vibrate if they actually had a streak
        triggerComboBreakHaptic();
        
        // Visual: Quick Red Fog pulse to show the "break"
        triggerFlash(0xff0000, 0.3);
        
        // Sound: Search FreeSound.org for "Power Down" or "Error"
        if (errorSound) errorSound.play();
        
        comboCount = 0;
        document.getElementById('combo-ui').style.display = 'none';
    }
}
