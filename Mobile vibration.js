function vibrateMobile() {
    if ("vibrate" in navigator) {
        navigator.vibrate(100); // Vibrate for 100ms
    }
}
