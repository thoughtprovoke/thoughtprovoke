if (distance < 0.8) {
    triggerFlash(0xffffff, 1.5);   // 1. The White Flash
    triggerCyanMist();             // 2. The Cyan Mist Pulse
    spawnEnergyBurst();            // 3. The Cyan Particles
    powerUpSound.play();           // 4. The Bright Chime
    
    powerUpTimer = 300; 
    this.remove();
}
