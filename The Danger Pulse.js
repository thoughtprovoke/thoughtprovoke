// High-wave "jitter"
const frequency = currentWave > 8 ? 0.03 : 0.01;
const jitter = 1 + Math.sin(Date.now() * frequency) * 0.1;
inv.scale.set(jitter, jitter, jitter);
