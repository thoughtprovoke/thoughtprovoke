// Inside collision detection:
if (hit) {
    updateCombo(true);
    const points = 10 * comboCount; // Each hit worth more
    score += points;
    spawnFloatingText(`+${points}`, invader.position, comboCount > 5 ? "#ffff00" : "#ffffff");
}
