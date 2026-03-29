class MegaBeam {
    constructor(sourcePos) {
        // Create a long, glowing cylinder
        const geo = new THREE.CylinderGeometry(0.5, 0.5, 20, 32);
        const mat = new THREE.MeshStandardMaterial({ 
            color: 0xffffff, 
            emissive: 0xff0000, 
            emissiveIntensity: 5,
            transparent: true,
            opacity: 0.8
        });
        this.mesh = new THREE.Mesh(geo, mat);
        
        // Rotate to point down at the player
        this.mesh.rotation.z = Math.PI / 2; 
        this.mesh.position.copy(sourcePos);
        this.mesh.scale.set(0, 1, 0); // Start thin
        scene.add(this.mesh);
        
        this.state = 'charging'; // charging -> firing -> dissipate
        this.timer = 0;
    }

    update() {
        this.timer++;
        if (this.state === 'charging') {
            // Pulse the beam thin and wide to show "powering up"
            this.mesh.scale.x = Math.sin(this.timer * 0.5) * 0.2;
            if (this.timer > 60) this.state = 'firing';
        } else if (this.state === 'firing') {
            // Explode to full width
            this.mesh.scale.x = THREE.MathUtils.lerp(this.mesh.scale.x, 4.0, 0.2);
            // Check collision with player (X-axis overlap)
            if (Math.abs(player.position.x - this.mesh.position.x) < 2) {
                handlePlayerHit(); // Instant damage if caught in beam
            }
            if (this.timer > 120) this.state = 'dissipate';
        } else {
            this.mesh.scale.x *= 0.8; // Fade away
            if (this.mesh.scale.x < 0.01) scene.remove(this.mesh);
        }
    }
}
