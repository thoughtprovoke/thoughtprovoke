const invaderGroup = new THREE.Group();
scene.add(invaderGroup);

let invaderDirection = 1;
let invaderMoveSpeed = 0.05;

function updateInvaders(dt) {
    let hitBoundary = false;

    // 1. Move horizontally
    invaderGroup.position.x += invaderDirection * invaderMoveSpeed * timeScale;

    // 2. Check if the formation's edges hit the boundaries
    // Note: We use the group's bounding box or manually track the furthest invaders
    if (invaderGroup.position.x > 3 || invaderGroup.position.x < -3) {
        hitBoundary = true;
    }

    // 3. Handle boundary collision
    if (hitBoundary) {
        invaderDirection *= -1;         // Reverse direction
        invaderGroup.position.y -= 0.5;  // Drop down
        invaderMoveSpeed *= 1.05;        // Increase speed for difficulty
    }
}
