// GET /api/leaderboard?player_id=USER123
app.get('/api/leaderboard', async (req, res) => {
    const { player_id } = req.query;
    const today = new Date().toISOString().split('T')[0];

    // 1. Get Today's Top 10 (Ascending: smallest time first)
    const top10 = await pool.query(
        'SELECT player_name, time_ms FROM race_leaderboard WHERE created_at = $1 ORDER BY time_ms ASC LIMIT 10',
        [today]
    );

    // 2. Get Personal Best (Lifetime)
    const personalBest = await pool.query(
        'SELECT MIN(time_ms) as pb FROM race_leaderboard WHERE player_id = $1',
        [player_id]
    );

    res.json({
        top10: top10.rows,
        personalBest: personalBest.rows[0].pb
    });
});
