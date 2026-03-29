function updatePBUI() {
    const elapsed = performance.now() - startTime;
    const container = document.getElementById('game-container');

    // Only glow silver if we are currently "ahead" of our best time
    if (elapsed < personalBest) {
        container.classList.add('on-pb-track');
    } else {
        container.classList.remove('on-pb-track');
    }
}
