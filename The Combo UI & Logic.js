let comboCount = 0;
let comboTimer = 0;
const COMBO_EXPIRY = 120; // ~2 seconds to keep the streak

function updateCombo(hit = true) {
    if (hit) {
        comboCount++;
        comboTimer = COMBO_EXPIRY;
        
        const ui = document.getElementById('combo-ui');
        ui.style.display = 'block';
        ui.classList.remove('bounce');
        void ui.offsetWidth; // Trigger reflow
        ui.classList.add('bounce');
        
        document.getElementById('combo-mult').innerText = comboCount;
    }
}

// In your animate() loop:
if (comboTimer > 0) {
    comboTimer--;
    if (comboTimer === 0) {
        comboCount = 0;
        document.getElementById('combo-ui').style.display = 'none';
    }
}
