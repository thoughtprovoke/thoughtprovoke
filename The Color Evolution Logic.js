const WAVE_COLORS = [
    0x00ff00, // Wave 1: Green (Safe)
    0x00ffff, // Wave 2: Cyan
    0x0000ff, // Wave 3: Blue
    0xffff00, // Wave 4: Yellow
    0xffa500, // Wave 5: Orange
    0xff0000  // Wave 6+: Red (Extreme)
];

function getWaveColor(wave) {
    // Return the specific color or stay Red for high waves
    return WAVE_COLORS[Math.min(wave - 1, WAVE_COLORS.length - 1)];
}
