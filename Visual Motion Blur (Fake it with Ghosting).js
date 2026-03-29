// Change your renderer setup to allow transparency
const renderer = new THREE.WebGLRenderer({ 
    preserveDrawingBuffer: true, 
    alpha: true 
});
renderer.autoClearColor = false;

// Inside animate() loop:
function animate() {
    requestAnimationFrame(animate);

    // If in Slow-Mo, draw a semi-transparent black plane over the screen
    // to create a "ghosting" or "trail" effect behind moving objects.
    if (timeScale < 0.5) {
        drawBlurOverlay(0.2); // 20% opacity black
    } else {
        renderer.clear(); // Normal crisp rendering
    }

    updateAudioPitch(timeScale);
    renderer.render(scene, camera);
}
