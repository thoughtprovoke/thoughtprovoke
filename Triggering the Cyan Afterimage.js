if (distanceToPlayer < 0.8) {
    triggerFlash(0xffffff, 1.5); // The Bright White Flash
    
    // Spawn the Cyan energy trail
    for (let i = 0; i < 25; i++) {
        energyParticles.push(new EnergyParticle(
            this.mesh.position.x, 
            this.mesh.position.y, 
            0
        ));
    }
    
    this.remove(); // Remove the power-up item
}
