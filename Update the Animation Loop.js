function animate() {
    requestAnimationFrame(animate);
    
    // ... existing player/bullet code ...

    // Update Explosions
    for (let i = explosions.length - 1; i >= 0; i--) {
        if (!explosions[i].update()) {
            explosions.splice(i, 1);
        }
    }

    renderer.render(scene, camera);
}
