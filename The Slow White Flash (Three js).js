let flashProgress = 0;
let isFlashing = false;

function triggerSlowFlash() {
    isFlashing = true;
    flashProgress = 0;
    
    // Show UI halfway through the flash for maximum impact
    setTimeout(() => {
        document.getElementById('leaderboard-overlay').style.display = 'block';
    }, 1000); 
}

// Inside your animate() loop:
if (isFlashing) {
    flashProgress += 0.01; // Controls flash speed (approx 3 seconds total)
    
    // Sine wave creates a smooth build-up and fade
    // Remapped to spike from 1.5 (normal) up to 10.0 (washout)
    const flashEffect = Math.sin(flashProgress * Math.PI);
    bloomPass.strength = 1.5 + (flashEffect * 8.5);
    
    if (flashProgress >= 1) {
        isFlashing = false;
        bloomPass.strength = 1.5; // Reset to standard
    }
}
