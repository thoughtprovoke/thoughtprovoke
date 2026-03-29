.floating-text {
    position: absolute;
    color: #ff0000;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 24px;
    pointer-events: none;
    text-shadow: 2px 2px #000;
    animation: floatUp 0.8s ease-out forwards;
    z-index: 15;
}

@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; scale: 1; }
    100% { transform: translateY(-50px); opacity: 0; scale: 1.5; }
}
