if (this.mesh.position.distanceTo(player.position) < 0.8) {
    powerUpTimer = 300; 
    triggerPowerUpVisuals(); // Trigger the bright chime and cyan light
    spawnFloatingText("TRIPLE SHOT!", player.position, "#00ffff");
    this.remove();
}
