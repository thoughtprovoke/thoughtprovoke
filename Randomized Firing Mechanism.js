let enemyShootTimer = 0;

function handleEnemyShooting(dt) {
    enemyShootTimer += dt;
    
    // Attempt to shoot every 1.5 seconds (scaled by timeScale)
    if (enemyShootTimer > 1.5 / timeScale && invaders.length > 0) {
        const randomIndex = Math.floor(Math.random() * invaders.length);
        const shooter = invaders[randomIndex];
        
        // Get world position if they are in a Group
        const shootPos = new THREE.Vector3();
        shooter.getWorldPosition(shootPos);
        
        createEnemyBullet(shootPos);
        enemyShootTimer = 0;
    }
}
