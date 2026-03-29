if (distance < 0.15) {
    // --- CRITICAL HIT ---
    spawnFloatingText("CRIT!", invader.position); 
    triggerFlash(0xff0000, 1.2); 
    triggerShake(300);
    // ... play heavy sound
} else {
    // Optional: show standard point values
    spawnFloatingText("+10", invader.position);
    triggerFlash(0xffffff, 0.5);
}
