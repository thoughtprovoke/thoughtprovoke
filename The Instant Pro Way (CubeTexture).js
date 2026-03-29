const cubeLoader = new THREE.CubeTextureLoader();
const texture = cubeLoader.load([
    'posx.jpg', 'negx.jpg',
    'posy.jpg', 'negy.jpg',
    'posz.jpg', 'negz.jpg'
]);
scene.background = texture; // This sets the scene background directly
