const originalColor = new THREE.Color(0x00ff00); // Green
const powerUpColor = new THREE.Color(0x00ffff); // Cyan

function animate() {
    requestAnimationFrame(animate);

    if (powerUpTimer > 0) {
        powerUpTimer--;
        
        // Pulse the player ship's color
        const pulse = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
        player.material.color.lerpColors(originalColor, powerUpColor, pulse);
        player.material.emissive.set(0x00ffff);
        player.material.emissiveIntensity = pulse;
    } else {
        // Reset to normal
        player.material.color.lerp(originalColor, 0.1);
        player.material.emissiveIntensity = 0;
    }

    // ... existing logic ...
}
