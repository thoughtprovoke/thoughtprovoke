// GET /api/leaderboard?player_id=USER_123
app.get('/api/leaderboard', async (req, res) => {
    const { player_id } = req.query;

    try {
        // 1. All-Time Top 10 (Ascending: smallest time_ms is first)
        const allTimeTop10 = await pool.query(
            'SELECT player_name, time_ms FROM leaderboard ORDER BY time_ms ASC LIMIT 10'
        );

        // 2. Personal Best (Lifetime for this specific player)
        const personalBestResult = await pool.query(
            'SELECT MIN(time_ms) as pb FROM leaderboard WHERE player_id = $1',
            [player_id]
        );

        res.json({
            top10: allTimeTop10.rows,
            personalBest: personalBestResult.rows[0].pb
        });
    } catch (err) {
        res.status(500).send("Database error");
    }
});
