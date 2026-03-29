// Inside your collision detection:
const distance = bullet.position.distanceTo(invader.position);

if (distance < 0.6) {
    // Check if it's a "Bullseye" (very close to center)
    if (distance < 0.15) {
        // --- CRITICAL HIT ---
        triggerFlash(0xff0000, 1.2); // Intense RED flash
        triggerShake(300);           // Longer shake
        score += 50;                 // Bonus points
        console.log("CRITICAL HIT!");
    } else {
        // --- NORMAL HIT ---
        triggerFlash(0xffffff, 0.5); // Subtle WHITE flash
        triggerShake(100);           // Short shake
        score += 10;
    }
    
    // Cleanup logic (remove bullet, invader, etc.)
}
