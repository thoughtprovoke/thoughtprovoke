import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

// Load the Player Model
loader.load('path/to/your/player_ship.glb', (gltf) => {
    const model = gltf.scene;
    model.position.set(0, -4, 0);
    model.scale.set(0.5, 0.5, 0.5); // Adjust size as needed
    scene.add(model);
    
    // Replace your old player 'cube' logic with this 'model'
    playerMesh = model; 
});

// Load the Invader Model
loader.load('path/to/your/alien_ship.glb', (gltf) => {
    // Inside your loop for creating invaders:
    const invaderModel = gltf.scene.clone(); // Use clone() for multiple enemies
    invaderModel.position.set(x, y, z);
    scene.add(invaderModel);
});
