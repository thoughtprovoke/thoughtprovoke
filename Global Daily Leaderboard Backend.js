const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors()); // Allow your game to talk to the server

let dailyScores = []; // For a simple demo; use a database for production

// POST: Save a new score
app.post('/api/scores', (req, res) => {
    const { name, score } = req.body;
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    
    // In production, save { name, score, date: today } to a database
    dailyScores.push({ name, score, date: today });
    res.status(201).send("Score recorded!");
});

// GET: Retrieve today's top 10 scores
app.get('/api/leaderboard', (req, res) => {
    const today = new Date().toISOString().split('T')[0];
    const topToday = dailyScores
        .filter(s => s.date === today)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    res.json(topToday);
});

app.listen(3000, () => console.log('Leaderboard active on port 3000'));
