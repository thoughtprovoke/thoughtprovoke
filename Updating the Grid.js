function createInvaderGrid() {
    const currentColor = getWaveColor(currentWave);
    
    for (let i = 0; i < totalInvaders; i++) {
        const invaderMat = new THREE.MeshStandardMaterial({ 
            color: currentColor,
            emissive: currentColor,
            emissiveIntensity: currentWave > 5 ? 1.5 : 0.2 // Glows brighter on higher waves
        });
        
        // ... rest of your invader creation logic
    }
}
