<div id="game-over-screen" style="display: none;">
    <h1>MISSION FAILED</h1>
    <p>Your Score: <span id="final-score">0</span></p>
    <div id="high-score-board">
        <h3>Local High Scores</h3>
        <ul id="score-list"></ul>
    </div>
    <button onclick="location.reload()">REDEPLOY</button>
</div>

<style>
    #game-over-screen {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.9); color: #ff0000;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        font-family: 'Courier New', monospace; z-index: 20;
    }
    #score-list { list-style: none; padding: 0; color: #00ff00; }
    button { padding: 10px 20px; background: #ff0000; color: white; border: none; cursor: pointer; }
</style>
