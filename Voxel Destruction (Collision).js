function checkBunkerCollision(bullet, bulletArray, bulletIdx) {
    for (let i = bunkerBlocks.length - 1; i >= 0; i--) {
        const block = bunkerBlocks[i];
        
        if (bullet.position.distanceTo(block.position) < 0.3) {
            // 1. Spawn a small green explosion
            const p = new Explosion(block.position.x, block.position.y, 0);
            p.points.material.color.set(0x00ff00);
            explosions.push(p);

            // 2. Remove the block and the bullet
            scene.remove(block);
            bunkerBlocks.splice(i, 1);
            
            scene.remove(bullet);
            bulletArray.splice(bulletIdx, 1);
            
            // 3. Play a "Chipping" sound from FreeSound.org
            if (chipSound) chipSound.play();
            
            return true; // Collision happened
        }
    }
    return false;
}
