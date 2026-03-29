let targetFogDensity = 0.04; // Your standard "space" fog
let targetFogColor = new THREE.Color(0x000000);

function triggerCyanMist() {
    // 1. Instantly thicken the fog and turn it Cyan
    scene.fog.density = 0.15; 
    scene.fog.color.set(0x00ffff);
    
    // 2. Set the "return" targets
    targetFogDensity = 0.04;
    targetFogColor.set(0x000000);
}
