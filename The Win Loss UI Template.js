<div id="results-screen" style="display: none;">
    <h1 id="results-title">MISSION COMPLETE</h1>
    <p>FINAL SCORE: <span id="results-score">0</span></p>
    <div id="highscore-container">
        <h3>TOP PILOTS</h3>
        <ol id="highscore-list"></ol>
    </div>
    <button id="retry-btn">REDEPLOY</button>
</div>

<style>
    #results-screen {
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.9); display: flex; flex-direction: column;
        align-items: center; justify-content: center; font-family: 'Courier New', monospace;
        z-index: 100; transition: opacity 0.5s;
    }
    .win { color: #00ff00; } /* Neon Green */
    .loss { color: #ff0000; } /* Alert Red */
    #highscore-list { color: #ffff00; text-align: left; }
    button { background: #00ff00; border: none; padding: 10px 20px; cursor: pointer; margin-top: 20px; }
</style>
