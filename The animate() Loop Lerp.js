function animate() {
    requestAnimationFrame(animate);

    if (lerpTimer > 0) {
        lerpTimer--;
        
        // Calculate progress (0.0 to 1.0)
        const alpha = 1 - (lerpTimer / LERP_DURATION);

        invaders.forEach(inv => {
            // Smoothly move from Old to Target
            inv.material.color.lerpColors(oldWaveColor, targetWaveColor, alpha);
            
            // If it's a high wave, make them "glow" into the new color too
            if (currentWave > 5) {
                inv.material.emissive.lerpColors(oldWaveColor, targetWaveColor, alpha);
                inv.material.emissiveIntensity = alpha * 1.5;
            }
        });
    }

    renderer.render(scene, camera);
}
