// State variables for the transition
let oldColor = new THREE.Color(0x00ff00); // Wave 1: Green
let newColor = new THREE.Color(0x00ffff); // Wave 2: Cyan
let transitionProgress = 0; // 0 to 1

function startWaveTransition() {
    transitionProgress = 0;
    // Set oldColor to current and newColor to the next tier's color
}

// Inside your animate() loop:
if (transitionProgress < 1) {
    transitionProgress += 0.01; // Transition speed
    
    invaders.forEach(inv => {
        // Linearly interpolate the mesh color toward the new wave color
        inv.material.color.lerpColors(oldColor, newColor, transitionProgress);
    });
}
