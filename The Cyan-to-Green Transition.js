if (powerUpTimer > 0) {
    const progress = powerUpTimer / 300; // 1.0 at start, 0 at end
    player.material.color.lerpColors(originalColor, powerUpColor, progress);
}
