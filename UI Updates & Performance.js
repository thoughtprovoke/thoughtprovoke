async function submitBestTime(name, timeMs) {
    await fetch('https://your-railway-url.up.railway.app', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player_name: name, time_ms: timeMs })
    });
}
