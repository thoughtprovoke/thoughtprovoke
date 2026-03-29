const explosions = [];

class Explosion {
    constructor(x, y, z) {
        const particleCount = 20;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        this.velocities = [];

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Random direction for each particle
            this.velocities.push({
                x: (Math.random() - 0.5) * 0.2,
                y: (Math.random() - 0.5) * 0.2,
                z: (Math.random() - 0.5) * 0.2
            });
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({ 
            color: 0xffaa00, 
            size: 0.1, 
            transparent: true, 
            opacity: 1 
        });
        
        this.points = new THREE.Points(geometry, material);
        this.life = 1.0; // Life starts at 100%
        scene.add(this.points);
    }

    update() {
        const positions = this.points.geometry.attributes.position.array;
        this.life -= 0.02; // Particles fade out
        this.points.material.opacity = this.life;

        for (let i = 0; i < this.velocities.length; i++) {
            positions[i * 3] += this.velocities[i].x;
            positions[i * 3 + 1] += this.velocities[i].y;
            positions[i * 3 + 2] += this.velocities[i].z;
        }
        this.points.geometry.attributes.position.needsUpdate = true;

        if (this.life <= 0) {
            scene.remove(this.points);
            return false; // Mark for deletion
        }
        return true;
    }
}
