function endRun() {
    endTime = performance.now();
    const runTime = Math.round(endTime - startTime); // Total time in ms

    if (runTime < currentPB) {
        localStorage.setItem('personalBestTime', runTime); // Persist new PB
        console.log("New Personal Best!");
        currentPB = runTime;
    }
    displayResults(runTime, currentPB);
}
