function triggerVictoryCinematic() {
    gameStarted = false; // Freeze gameplay
    
    // 1. Zoom camera in on player
    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(0, -2, 2);
    
    let progress = 0;
    function animateCam() {
        progress += 0.01;
        camera.position.lerpVectors(startPos, endPos, progress);
        camera.lookAt(0, 5, 0); // Look "forward" into space

        // 2. Accelerate stars to simulate Warp
        starField.scale.z += 0.5; 
        starSpeed = 2.0;

        if (progress < 1) {
            requestAnimationFrame(animateCam);
        } else {
            showFinalScore(); // Finally show the UI
        }
    }
    animateCam();
}
