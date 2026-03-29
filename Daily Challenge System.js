function getDailySeed() {
    const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
    // Simple hash function to turn string into a number
    return today.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
}

// Use a seeded random for invader positions
const seed = getDailySeed();
function seededRandom() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
