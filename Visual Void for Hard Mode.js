if (level === 'HARD') {
    scene.fog.density = 0; // Absolute clarity, nowhere to hide
    starField.material.color.set(0xffffff); // Pure white stars
    document.getElementById('start-btn').style.color = '#ff0000'; // Alert Red
}
