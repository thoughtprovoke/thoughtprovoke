if (isRunActive && (performance.now() - startTime) < personalBest) {
    hudElement.classList.add('silver-glow'); // Apply the Silver Neon CSS
} else {
    hudElement.classList.remove('silver-glow');
}
