// Initial "Menu" position (High and looking down)
camera.position.set(0, 10, 5);
camera.lookAt(0, 0, 0);

function startCameraAnimation() {
    const targetPos = { x: 0, y: 0, z: 8 }; // Gameplay position
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    function updateCamera(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smoothly interpolate (Lerp) the position
        camera.position.y = 10 - (10 * progress);
        camera.position.z = 5 + (3 * progress);
        camera.lookAt(0, -progress * 4, 0);

        if (progress < 1) requestAnimationFrame(updateCamera);
    }
    requestAnimationFrame(updateCamera);
}
