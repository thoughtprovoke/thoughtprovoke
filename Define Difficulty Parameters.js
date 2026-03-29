const DIFFICULTY = {
    EASY:   { speed: 0.03, fireRate: 2.0, lives: 5, scoreMult: 1 },
    MEDIUM: { speed: 0.06, fireRate: 1.2, lives: 3, scoreMult: 2 },
    HARD:   { speed: 0.10, fireRate: 0.6, lives: 1, scoreMult: 5 }
};

let currentConfig = DIFFICULTY.MEDIUM; // Default
