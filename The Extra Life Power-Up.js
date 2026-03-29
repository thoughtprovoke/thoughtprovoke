class ExtraLife {
    constructor(x, y) {
        const geo = new THREE.IcosahedronGeometry(0.4);
        const mat = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00 });
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.set(x, y, 0);
        scene.add(this.mesh);
    }
    update() {
        this.mesh.position.y -= 0.05 * timeScale;
        this.mesh.rotation.y += 0.05;

        if (this.mesh.position.distanceTo(player.position) < 0.8) {
            lives++;
            document.getElementById('lives-count').innerText = lives;
            spawnFloatingText("1UP!", player.position, "#00ff00");
            triggerFlash(0x00ff00, 0.5); // Green Flash
            this.remove();
        }
    }
    remove() {
        scene.remove(this.mesh);
        powerUps.splice(powerUps.indexOf(this), 1);
    }
}
