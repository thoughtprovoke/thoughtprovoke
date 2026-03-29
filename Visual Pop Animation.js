if (powerUpTimer === 0) {
    // Make the ship quickly pulse in size for one frame
    player.scale.set(1.5, 1.5, 1.5);
    
    // Smoothly scale back to 1.0 over the next few frames
    setTimeout(() => {
        player.scale.set(1, 1, 1);
    }, 100);
}
