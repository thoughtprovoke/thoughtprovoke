if (distance < 0.6) {
    if (Math.random() < 0.05) {
        powerUps.push(new PowerUp(invader.position.x, invader.position.y));
    }
    // ... existing destruction logic
}
