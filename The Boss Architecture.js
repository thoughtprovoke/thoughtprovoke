let boss = null;
let bossHealth = 100;

class FinalBoss {
    constructor() {
        this.group = new THREE.Group();
        
        // 1. The Core (Main Hitbox)
        const coreGeo = new THREE.OctahedronGeometry(2, 2);
        const coreMat = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000 });
        this.core = new THREE.Mesh(coreGeo, coreMat);
        this.group.add(this.core);

        // 2. Protective Shields (Must be destroyed first)
        this.shields = [];
        for (let i = 0; i < 4; i++) {
            const shield = new THREE.Mesh(
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshStandardMaterial({ color: 0x00ffff })
            );
            shield.position.set(Math.cos(i) * 3, Math.sin(i) * 3, 0);
            this.group.add(shield);
            this.shields.push(shield);
        }

        this.group.position.y = 10; // Start above screen
        scene.add(this.group);
    }

    update(time) {
        // Entrance animation
        if (this.group.position.y > 4) this.group.position.y -= 0.02;

        // Phase 1: Rotating Shields
        this.shields.forEach((s, i) => {
            s.position.x = Math.cos(time * 0.002 + i) * 4;
            s.position.y = Math.sin(time * 0.002 + i) * 4;
        });
    }
}
