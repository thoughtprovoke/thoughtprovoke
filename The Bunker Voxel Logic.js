const bunkerBlocks = [];

function createBunker(posX) {
    const bunkerGroup = new THREE.Group();
    const size = 0.3; // Size of each small block
    const rows = 4;
    const cols = 6;

    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            // Skip corners to give it a "shield" shape
            if ((y === rows - 1 && (x === 0 || x === cols - 1))) continue;

            const geo = new THREE.BoxGeometry(size, size, size);
            const mat = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
            const block = new THREE.Mesh(geo, mat);

            block.position.set(
                posX + (x * size) - (cols * size / 2), 
                -2.5 + (y * size), 
                0
            );
            
            scene.add(block);
            bunkerBlocks.push(block);
        }
    }
}

// Create 3 bunkers across the play area
createBunker(-4);
createBunker(0);
createBunker(4);
