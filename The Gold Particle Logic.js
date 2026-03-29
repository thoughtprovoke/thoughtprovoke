class GoldExplosion {
    constructor(x, y, z) {
        const particleCount = 100; // Denser than normal
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        this.velocities = [];

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            this.velocities.push({
                x: (Math.random() - 0.5) * 0.5,
                y: (Math.random() - 0.5) * 0.5,
                z: (Math.random() - 0.5) * 0.5
            });
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        // Material with Gold Hex and high Emissive for Bloom
        this.material = new THREE.PointsMaterial({ 
            color: 0xffd700, // Gold
            size: 0.15,
            transparent: true,
            opacity: 1,
            blending: THREE.AdditiveBlending // Makes them "glow" together
        });

        this.points = new THREE.Points(geometry, this.material);
        this.life = 2.0; // Lasts longer than standard
        scene.add(this.points);
    }

    update() {
        const positions = this.points.geometry.attributes.position.array;
        this.life -= 0.015;
        this.material.opacity = Math.min(this.life, 1.0);
        
        // Twinkle effect
        this.material.size = (Math.random() * 0.1) + 0.1;

        for (let i = 0; i < this.velocities.length; i++) {
            positions[i * 3] += this.velocities[i].x;
            positions[i * 3 + 1] += this.velocities[i].y;
            positions[i * 3 + 2] += this.velocities[i].z;
            this.velocities[i].y -= 0.005; // Gravity pull
        }
        this.points.geometry.attributes.position.needsUpdate = true;

        if (this.life <= 0) {
            scene.add(this.points); // Cleanup logic
            return false;
        }
        return true;
    }
}
