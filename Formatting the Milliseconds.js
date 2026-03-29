function formatTime(ms) {
    if (!ms) return "--:--.---";
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const mlls = Math.floor(ms % 1000);
    return `${mins}:${secs.toString().padStart(2, '0')}.${mlls.toString().padStart(3, '0')}`;
}

// In your fetch callback:
const list = document.getElementById('leaderboard-list');
list.innerHTML = data.top10.map((entry, i) => `
    <div class="score-row">
        <span>${i + 1}. ${entry.player_name}</span>
        <span>${formatTime(entry.time_ms)}</span>
    </div>
`).join('');

document.getElementById('pb-display').innerText = formatTime(data.personalBest);
