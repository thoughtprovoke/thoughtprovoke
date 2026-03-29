function triggerPowerUpVisuals() {
    // 1. Create a temporary bright Cyan light
    const light = new THREE.PointLight(0x00ffff, 10, 10);
    light.position.copy(player.position);
    scene.add(light);

    // 2. Play the "Bright" Chime
    if (powerUpSound.isPlaying) powerUpSound.stop();
    powerUpSound.play();

    // 3. Animate the light "exploding" then disappearing
    let intensity = 10;
    const fade = setInterval(() => {
        intensity -= 0.5;
        light.intensity = intensity;
        if (intensity <= 0) {
            scene.remove(light);
            clearInterval(fade);
        }
    }, 30);
}
