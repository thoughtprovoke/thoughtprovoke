// Scale speed based on how many are left
const remainingPercent = invaders.length / totalInvaders;
invaderMoveSpeed = 0.05 + (1 - remainingPercent) * 0.2;
