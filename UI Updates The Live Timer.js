function updateTimer() {
    if (!isRunActive) return;

    const currentTime = performance.now() - startTime;
    const timerDisplay = document.getElementById('live-timer');
    timerDisplay.innerText = formatTime(currentTime);

    // Live Check: Are we currently faster than the PB?
    if (currentTime < personalBest) {
        document.getElementById('game-container').classList.add('on-pb-track');
    } else {
        document.getElementById('game-container').classList.remove('on-pb-track');
    }
}
