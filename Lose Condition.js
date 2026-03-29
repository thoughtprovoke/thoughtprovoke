invaders.forEach(inv => {
    // Get the world position since they are inside a group
    const worldPos = new THREE.Vector3();
    inv.getWorldPosition(worldPos);
    
    if (worldPos.y <= player.position.y) {
        showGameOver(score);
    }
});
