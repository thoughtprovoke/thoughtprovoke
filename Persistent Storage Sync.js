if (finalTime < personalBest) {
    localStorage.setItem('pb_time', finalTime);
    personalBest = finalTime; // Update live memory
}
