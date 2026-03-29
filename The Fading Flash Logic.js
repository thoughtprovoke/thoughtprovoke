let flashIntensity = 0;
let flashColor = new THREE.Color(0xffffff);

function triggerFlash(color = 0xffffff, intensity = 1.0) {
    flashColor.set(color);
    flashIntensity = intensity;
}

// Inside your animate() loop:
function animate() {
    requestAnimationFrame(animate);

    if (flashIntensity > 0) {
        // Fade out the intensity by 5% each frame
        flashIntensity *= 0.92; 
        
        // Create the faded color (Black lerped towards the flash color)
        const currentFlash = new THREE.Color(0x000000).lerp(flashColor, flashIntensity);
        
        scene.background = currentFlash;
        scene.fog.color = currentFlash;

        // Reset if it gets very low
        if (flashIntensity < 0.01) flashIntensity = 0;
    }

    renderer.render(scene, camera);
}
