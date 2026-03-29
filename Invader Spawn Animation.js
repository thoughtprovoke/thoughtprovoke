// Inside your invader creation loop
invader.scale.set(0, 0, 0); // Start invisible/tiny

// Then animate them growing:
function animateSpawning() {
    invaders.forEach((inv, i) => {
        setTimeout(() => {
            // Simple logic to grow the scale every frame
            let grow = setInterval(() => {
                inv.scale.x += 0.1;
                inv.scale.y += 0.1;
                inv.scale.z += 0.1;
                if (inv.scale.x >= 1) clearInterval(grow);
            }, 30);
        }, i * 50); // Staggered entry for a "wave" effect
    });
}
