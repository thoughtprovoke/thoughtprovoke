const energyParticles = [];

class EnergyParticle {
    constructor(x, y, z) {
        const geo = new THREE.SphereGeometry(0.05, 4, 4);
        const mat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 1 });
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.set(x, y, z);
        
        // Initial "burst" velocity
        this.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 0.2
        );
        
        scene.add(this.mesh);
    }

    update() {
        // 1. Initial burst movement
        this.mesh.position.add(this.velocity);
        this.velocity.multiplyScalar(0.95); // Friction

        // 2. Attraction: Pull toward the player ship
        const dir = new THREE.Vector3().subVectors(player.position, this.mesh.position).normalize();
        this.mesh.position.addScaledVector(dir, 0.1);

        // 3. Fade out as they get close
        if (this.mesh.position.distanceTo(player.position) < 0.5) {
            this.remove();
        }
    }

    remove() {
        scene.remove(this.mesh);
        energyParticles.splice(energyParticles.indexOf(this), 1);
    }
}
