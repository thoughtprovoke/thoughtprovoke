let startTime, endTime, currentPB;

function startGame() {
    startTime = performance.now(); // Record start time
    currentPB = localStorage.getItem('personalBestTime') || Infinity;
}
