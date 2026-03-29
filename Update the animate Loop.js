function animate() {
    requestAnimationFrame(animate);

    // Smoothly fade the fog back to normal
    scene.fog.density = THREE.MathUtils.lerp(scene.fog.density, targetFogDensity, 0.05);
    scene.fog.color.lerp(targetFogColor, 0.05);

    // ... existing particle and power-up logic ...
    
    renderer.render(scene, camera);
}
