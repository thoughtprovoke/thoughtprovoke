#overlay, #game-over-screen {
    transition: opacity 0.8s ease-in-out, visibility 0.8s;
    opacity: 1;
    visibility: visible;
}

/* Add this class via JavaScript to hide screens */
.hidden {
    opacity: 0 !important;
    visibility: hidden !important;
}
