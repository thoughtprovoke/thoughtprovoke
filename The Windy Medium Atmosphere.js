// Inside updateStars()
if (currentConfig === DIFFICULTY.MEDIUM) {
    // Add a slight "wobble" to stars to simulate wind/turbulence
    starField.position.x = Math.sin(Date.now() * 0.001) * 0.5;
}
