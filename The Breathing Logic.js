function animate() {
    requestAnimationFrame(animate);

    // Get a pulsing value between 0.95 and 1.05
    const pulse = 1 + Math.sin(Date.now() * 0.005) * 0.05;

    invaders.forEach(inv => {
        // Apply the pulse to the base scale
        // If we are in the 'lerp' phase, make the pulse even bigger!
        const intensity = lerpTimer > 0 ? 0.15 : 0.05;
        const activePulse = 1 + Math.sin(Date.now() * 0.01) * intensity;
        
        inv.scale.set(activePulse, activePulse, activePulse);
    });

    // ... rest of your movement and lerp logic ...
}
