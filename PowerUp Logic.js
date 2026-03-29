const powerUps = [];
let powerUpTimer = 0;

class PowerUp {
    constructor(x, y) {
        const geo = new THREE.IcosahedronGeometry(0.4);
        const mat = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff });
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.set(x, y, 0);
        scene.add(this.mesh);
    }
    update() {
        this.mesh.position.y -= 0.05; // Fall toward player
        this.mesh.rotation.y += 0.05;
        // Collision with Player
        if (this.mesh.position.distanceTo(player.position) < 0.8) {
            powerUpTimer = 300; // ~5 seconds of Triple Shot
            spawnFloatingText("TRIPLE SHOT!", player.position, "#00ffff");
            this.remove();
        }
    }
    remove() {
        scene.remove(this.mesh);
        powerUps.splice(powerUps.indexOf(this), 1);
    }
}
