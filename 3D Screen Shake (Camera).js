let shakeTime = 0;
const shakeIntensity = 0.2;

function triggerShake(duration = 200) {
    shakeTime = duration;
}

// Inside your animate() loop:
function animate() {
    requestAnimationFrame(animate);

    if (shakeTime > 0) {
        // Randomly offset from the "standard" camera position (0, 0, 8)
        camera.position.x = (Math.random() - 0.5) * shakeIntensity;
        camera.position.y = (Math.random() - 0.5) * shakeIntensity;
        shakeTime -= 16; // Roughly one frame at 60fps
    } else {
        // Reset to default when done
        camera.position.x = 0;
        camera.position.y = 0;
    }

    renderer.render(scene, camera);
}
