<div id="overlay">
    <h1>SPACE INVADERS 3D</h1>
    <button id="start-btn">START MISSION</button>
    <p>Arrows to Move • Space to Shoot</p>
</div>

<style>
    #overlay {
        position: absolute; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        color: #00ff00; font-family: 'Courier New', monospace; z-index: 10;
    }
    #start-btn {
        padding: 15px 30px; font-size: 20px; background: #00ff00; color: black;
        border: none; cursor: pointer; margin: 20px; font-weight: bold;
    }
    #start-btn:hover { background: #008800; color: white; }
</style>
