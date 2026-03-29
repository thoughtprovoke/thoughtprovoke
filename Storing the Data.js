// POST /api/scores
app.post('/api/scores', async (req, res) => {
    const { player_id, player_name, time_ms } = req.body;
    
    // Store time_ms as an INTEGER for perfect precision
    await pool.query(
        'INSERT INTO leaderboard (player_id, player_name, time_ms) VALUES ($1, $2, $3)',
        [player_id, player_name, time_ms]
    );
    res.status(201).send("Time recorded!");
});
