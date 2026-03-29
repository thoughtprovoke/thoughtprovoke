// --- Skybox Setup ---
const loader = new THREE.TextureLoader();

// Replace with your image URL
loader.load('https://threejs.org', (texture) => {
    // We use a Sphere for an "Infinite" feel
    const skyGeo = new THREE.SphereGeometry(500, 60, 40);
    
    // Invert the geometry so we see the texture from the INSIDE
    skyGeo.scale(-1, 1, 1); 

    const skyMat = new THREE.MeshBasicMaterial({
        map: texture
    });

    const sky = new THREE.Mesh(skyGeo, skyMat);
    scene.add(sky);
});
