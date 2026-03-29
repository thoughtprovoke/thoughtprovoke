function updateDailyCountdown() {
    const now = new Date();
    const midnight = new Date(Date.UTC(
        now.getUTCFullYear(), 
        now.getUTCMonth(), 
        now.getUTCDate() + 1, 0, 0, 0
    ));
    
    const diff = midnight - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer-display').innerText = 
        `RESET IN: ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateDailyCountdown, 1000); // Update every second
