if (currentWave === 16 && !boss) {
    boss = new FinalBoss();
    document.getElementById('boss-ui').style.display = 'block';
    if (bossMusic) bossMusic.play();
}
