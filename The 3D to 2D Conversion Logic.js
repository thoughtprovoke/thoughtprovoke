function spawnFloatingText(text, position3D) {
    const div = document.createElement('div');
    div.className = 'floating-text';
    div.innerText = text;
    document.body.appendChild(div);

    // Convert 3D position to 2D screen coordinates
    const vector = position3D.clone();
    vector.project(camera);

    const x = (vector.x *  .5 + .5) * window.innerWidth;
    const y = (vector.y * -.5 + .5) * window.innerHeight;

    div.style.left = `${x}px`;
    div.style.top = `${y}px`;

    // Remove the element after the animation ends
    setTimeout(() => div.remove(), 800);
}
