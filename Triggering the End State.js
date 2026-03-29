// Inside your animate() or update loop:
invaders.forEach(inv => {
    if (inv.position.y <= player.position.y) {
        showGameOver(score);
    }
});
