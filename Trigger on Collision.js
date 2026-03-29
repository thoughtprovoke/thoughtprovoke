// Inside your collision detection:
if (bullet.position.distanceTo(invader.position) < 0.6) {
    // 1. Create explosion at the invader's location
    explosions.push(new Explosion(invader.position.x, invader.position.y, invader.position.z));
    
    // 2. Remove objects as normal
    scene.remove(invader);
    scene.remove(bullet);
    // ... rest of your removal logic
}
