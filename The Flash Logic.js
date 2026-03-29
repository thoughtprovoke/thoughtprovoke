let flashTime = 0;

function triggerFlash(duration = 100) {
    flashTime = duration;
}

// Inside your animate() loop:
function animate() {
    requestAnimationFrame(animate);

    if (flashTime > 0) {
        // Flash the background and fog to White
        scene.background = new THREE.Color(0xffffff);
        scene.fog.color = new THREE.Color(0xffffff);
        flashTime -= 16; 
    } else {
        // Revert to original Black
        scene.background = new THREE.Color(0x000000);
        scene.fog.color = new THREE.Color(0x000000);
    }

    renderer.render(scene, camera);
}
