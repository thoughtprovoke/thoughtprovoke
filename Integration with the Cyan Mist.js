if (distanceToPlayer < 0.8) {
    triggerFlash(0xffffff, 1.5);   // 1. Visual: Bright Flash
    triggerCyanMist();             // 2. Visual: Thick Mist
    triggerPowerHaptics();         // 3. Physical: Energy Pulse
    powerUpSound.play();           // 4. Audio: Bright Chime
    
    powerUpTimer = 300; 
    this.remove();
}
