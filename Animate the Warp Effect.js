function updateStars() {
    const positions = starField.geometry.attributes.position.array;
    
    // Speed up during Power-Ups or Slow down during Bullet Time
    let speed = (0.1 * timeScale); 
    if (powerUpTimer > 0) speed *= 3; // Hyperspace effect

    for (let i = 0; i < starCount; i++) {
        // Move star toward the camera (positive Z)
        positions[i * 3 + 2] += speed;

        // If star passes the camera, reset to the back
        if (positions[i * 3 + 2] > 5) {
            positions[i * 3 + 2] = -45;
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
        }
    }
    starField.geometry.attributes.position.needsUpdate = true;
    
    // Stretch stars during high speed
    starField.scale.z = (powerUpTimer > 0) ? 2.5 : 1.0;
}
