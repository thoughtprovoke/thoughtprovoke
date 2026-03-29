let boss = null;
let nextBossThreshold = 500;

class Boss {
    constructor() {
        const geo = new THREE.CylinderGeometry(1.5, 1.5, 0.5, 32); // Saucer shape
        const mat = new THREE.MeshStandardMaterial({ 
            color: 0xff00ff, 
            emissive: 0xff00ff, 
            emissiveIntensity: 2 
        });
        
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.rotation.x = Math.PI / 2;
        this.mesh.position.set(-10, 4, 0); // Start off-screen left
        scene.add(this.mesh);
        
        this.speed = 0.15;
        this.isDead = false;
        
        // Play UFO hum sound (from FreeSound.org)
        if (ufoSound) ufoSound.play();
    }

    update() {
        this.mesh.position.x += this.speed;
        this.mesh.rotation.z += 0.1; // Spin effect

        // Remove if it flies off-screen right
        if (this.mesh.position.x > 10) {
            this.cleanup();
        }
    }

    cleanup() {
        scene.remove(this.mesh);
        boss = null;
        if (ufoSound) ufoSound.stop();
    }
}
