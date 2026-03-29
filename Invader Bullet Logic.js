const enemyBullets = [];

function createEnemyBullet(invaderPosition) {
    const geo = new THREE.SphereGeometry(0.1);
    const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red for danger
    const bullet = new THREE.Mesh(geo, mat);
    
    bullet.position.copy(invaderPosition);
    scene.add(bullet);
    enemyBullets.push(bullet);
}
