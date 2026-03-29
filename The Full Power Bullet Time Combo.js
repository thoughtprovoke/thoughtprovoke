if (distanceToPlayer < 0.8) {
    triggerFlash(0xffffff, 1.5);   // White Flash
    triggerCyanMist();             // Cyan Mist Pulse
    triggerPowerHaptics();         // Vibrations
    triggerBulletTime();           // SLOW MOTION
    
    powerUpSound.play();           // Bright Chime
    powerUpTimer = 300; 
    this.remove();
}
