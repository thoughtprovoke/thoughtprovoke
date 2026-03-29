function updateStars() {
    const positions = starField.geometry.attributes.position.array;
    
    // Base speed modified by timeScale and power-ups
    let speed = 0.1 * timeScale;
    if (powerUpTimer > 0) speed *= 5; // Warp speed during power-up

    for (let i = 0; i < starCount; i++) {
        // Move star toward viewer (positive Z)
        positions[i * 3 + 2] += speed;

        // If star passes the camera, reset it to the far background
        if (positions[i * 3 + 2] > 5) {
            positions[i * 3 + 2] = -45; // Reset depth
            // Optional: Re-randomize X/Y to keep it feeling fresh
            positions[i * 3] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        }
    }
    // Flag the geometry to update its position buffer on the GPU
    starField.geometry.attributes.position.needsUpdate = true;
}
