CREATE TABLE leaderboard (
    id SERIAL PRIMARY KEY,
    player_name VARCHAR(50),
    score INT,
    created_at DATE DEFAULT CURRENT_DATE
);
