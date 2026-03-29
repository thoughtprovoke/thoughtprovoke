let combo = 0;
let comboTimer = 0;
const COMBO_MAX_TIME = 150; // ~2.5 seconds to hit next target

function addHit() {
    combo++;
    comboTimer = COMBO_MAX_TIME;
    
    // Update UI
    const comboEl = document.getElementById('combo-ui');
    comboEl.innerText = `COMBO X${combo}`;
    comboEl.style.display = 'block';
    
    // Visual "Pop"
    comboEl.classList.remove('pulse');
    void comboEl.offsetWidth; // Trigger CSS restart
    comboEl.classList.add('pulse');

    // Score Multiplier
    score += (10 * combo);
}

// In animate loop:
if (comboTimer > 0) {
    comboTimer -= (1 * timeScale);
    if (comboTimer <= 0) {
        combo = 0;
        document.getElementById('combo-ui').style.display = 'none';
        triggerComboBreakHaptic(); // From previous step
    }
}
