function updateCombo(hit = true) {
    if (hit) {
        comboCount++;
        // Sharp, growing feedback
        if ("vibrate" in navigator) {
            const intensity = Math.min(10 + (comboCount * 5), 50);
            navigator.vibrate(intensity);
        }
        // ... rest of combo logic
    }
}
