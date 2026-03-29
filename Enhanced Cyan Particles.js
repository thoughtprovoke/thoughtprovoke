// Inside PowerUp pickup
for(let i=0; i<15; i++) {
    const p = new Explosion(this.mesh.position.x, this.mesh.position.y, 0);
    p.points.material.color.set(0x00ffff); // Force particles to Cyan
    explosions.push(p);
}
