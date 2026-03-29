// Inside your animate() loop:
const time = Date.now() * 0.005; // Speed of the pulse

// Sine wave remap: (sin(x) * range) + base_scale
const pulseScale = (Math.sin(time) * 0.1) + 1.0;

invaders.forEach((inv, index) => {
    // Offset each invader slightly for a "ripple" effect across the grid
    const individualPulse = (Math.sin(time + index * 0.2) * 0.1) + 1.0;
    inv.scale.set(individualPulse, individualPulse, individualPulse);
});
