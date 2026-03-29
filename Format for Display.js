function formatTime(ms) {
    if (ms === Infinity) return "--:--.---";
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const mlls = Math.floor(ms % 1000);
    return `${mins}:${secs.toString().padStart(2, '0')}.${mlls.toString().padStart(3, '0')}`;
}
