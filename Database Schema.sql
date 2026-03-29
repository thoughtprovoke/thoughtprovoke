CREATE TABLE race_leaderboard (
    id SERIAL PRIMARY KEY,
    player_id VARCHAR(50), -- Unique ID for the player
    player_name VARCHAR(50),
    time_ms INT,           -- Time in milliseconds (smaller is better)
    created_at DATE DEFAULT CURRENT_DATE
);
