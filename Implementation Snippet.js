const express = require('express');
const { Pool } = require('pg'); // PostgreSQL client
const app = express();

const pool = new Pool({ /* DB Config */ });

app.get('/api/leaderboard', async (req, res) => {
    // Only fetch scores from TODAY
    const result = await pool.query(
        'SELECT player_name, score FROM leaderboard WHERE created_at = CURRENT_DATE ORDER BY score DESC LIMIT 10'
    );
    res.json(result.rows);
});
