function animate() {
    requestAnimationFrame(animate);

    // Handle the fading White Flash
    if (flashIntensity > 0) {
        flashIntensity *= 0.85; // Fast fade for "Bright" effect
        const currentFlash = new THREE.Color(0x000000).lerp(new THREE.Color(0xffffff), flashIntensity);
        scene.background = currentFlash;
        scene.fog.color = currentFlash;
    }

    // Handle the persistent Cyan Power-Up State
    if (powerUpTimer > 0) {
        powerUpTimer--;
        player.material.color.set(0x00ffff); // Keep ship Cyan
        player.material.emissive.set(0x00ffff);
        player.material.emissiveIntensity = Math.sin(Date.now() * 0.02) * 0.5 + 0.5;
    } else {
        player.material.color.set(0x00ff00); // Back to Green
        player.material.emissiveIntensity = 0;
    }

    renderer.render(scene, camera);
}
