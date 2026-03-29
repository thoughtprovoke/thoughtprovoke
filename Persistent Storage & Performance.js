// Load PB on startup (stored in milliseconds)
let personalBest = parseInt(localStorage.getItem('pb_time')) || Infinity;
let startTime = 0;
let isRunActive = false;

function startRun() {
    startTime = performance.now();
    isRunActive = true;
}
