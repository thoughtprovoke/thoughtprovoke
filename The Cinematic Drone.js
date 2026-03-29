// Inside animate loop:
const pitch = 1.0 + (combo * 0.05); // Subtle pitch up per hit
ambientDrone.setPlaybackRate(pitch * timeScale);
