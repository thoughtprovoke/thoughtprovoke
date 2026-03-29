let targetFogColor = new THREE.Color(0x000000);
const goldFogColor = new THREE.Color(0x443300); // Deep, muted gold

function triggerGoldCelebration() {
    // 1. Set the target to gold
    targetFogColor.copy(goldFogColor);
    
    // 2. Play the "Golden Chime" (ID: 411460) from FreeSound.org
    if (goldChime) goldChime.play();

    // 3. Revert to black after 4 seconds
    setTimeout(() => {
        targetFogColor.set(0x000000);
    }, 4000);
}

// Inside your animate() loop:
scene.fog.color.lerp(targetFogColor, 0.05);
scene.background.copy(scene.fog.color); // Sync background with fog
