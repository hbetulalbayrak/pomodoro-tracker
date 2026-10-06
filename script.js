let timeLeft = 1500;
let timerId = null;
const timerDisplay = document.getElementById('timer');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('startBtn').addEventListener('click', () => {
    if (timerId !== null) return;
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerId);
            timerId = null;
            alert('Süre bitti! Harika iş çıkardın.');
        }
    }, 1000);
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 1500;
    updateDisplay();
});

updateDisplay();