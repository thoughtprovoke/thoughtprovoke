// --- Inside Boss update loop ---
if (this.health < 50 && !this.isFiringBeam) {
    this.state = 'charging';
    this.chargeTimer = 0;
    this.isFiringBeam = true;
}

if (this.state === 'charging') {
    this.chargeTimer++;
    // Visual cue: Pulse the bloom and play a rising pitch sound
    bloomPass.strength = 1.5 + Math.sin(Date.now() * 0.05) * 1.0;
    
    if (this.chargeTimer > 100) {
        this.state = 'firing';
        triggerFlash(0xffffff, 1.5); // Initial "bang" of the laser
    }
} else if (this.state === 'firing') {
    // Increase Bloom to the requested 2.8 intensity
    bloomPass.strength = THREE.MathUtils.lerp(bloomPass.strength, 2.8, 0.1);
    
    // Check collision: if player is within the beam's width (X-axis)
    if (Math.abs(player.position.x - this.mesh.position.x) < 2) {
        handlePlayerHit();
    }
}
