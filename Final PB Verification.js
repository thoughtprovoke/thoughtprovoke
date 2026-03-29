function finishRun() {
    const finalTime = performance.now() - startTime;
    isRunActive = false;

    if (finalTime < personalBest) {
        localStorage.setItem('pb_time', finalTime);
        personalBest = finalTime;
        triggerGoldCelebration(); // Trigger the Gold Particles + Slow White Flash
    }
}
