function shoot() {
    const createBullet = (offsetX) => {
        const b = new THREE.Mesh(bulletGeo, bulletMat);
        b.position.set(player.position.x + offsetX, player.position.y + 0.5, 0);
        scene.add(b);
        bullets.push(b);
    };

    if (powerUpTimer > 0) {
        createBullet(-0.3); // Left
        createBullet(0);    // Center
        createBullet(0.3);  // Right
    } else {
        createBullet(0);
    }
}
