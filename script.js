let timerInterval;
let timeLeft = 40 * 60;
let isFocusPhase = true;
let isRunning = false;
let workDuration = 40;
let breakDuration = 15;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const workPhase = document.getElementById('workPhase');
const breakPhase = document.getElementById('breakPhase');
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const workInput = document.getElementById('workInput');
const breakInput = document.getElementById('breakInput');
const saveBtn = document.getElementById('saveBtn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    workPhase.textContent = `Work ${workDuration}min`;
    breakPhase.textContent = `Break ${breakDuration}min`;
    
    workPhase.classList.toggle('active', isFocusPhase);
    breakPhase.classList.toggle('active', !isFocusPhase);
    
    document.body.className = isFocusPhase ? 'dark-theme' : 'light-theme';
}

function startTimer(autoStart = false) {
    if (!isRunning || autoStart) {
        isRunning = true;
        startBtn.textContent = 'Pause';
        
        if (!autoStart) {
            clearInterval(timerInterval);
        }

        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                isFocusPhase = !isFocusPhase;
                timeLeft = isFocusPhase ? workDuration * 60 : breakDuration * 60;
                updateDisplay();
                startTimer(true);
            }
        }, 1000);
    } else {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.textContent = 'Continue';
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isFocusPhase = true;
    timeLeft = workDuration * 60;
    updateDisplay();
    startBtn.textContent = 'Start';
}

function switchPhase(targetPhase) {
    if (!isRunning) {
        isFocusPhase = targetPhase === 'work';
        timeLeft = isFocusPhase ? workDuration * 60 : breakDuration * 60;
        updateDisplay();
    }
}

settingsBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('active');
});

saveBtn.addEventListener('click', () => {
    workDuration = parseInt(workInput.value) || 40;
    breakDuration = parseInt(breakInput.value) || 15;
    
    if (!isRunning) {
        isFocusPhase = true;
        timeLeft = workDuration * 60;
        updateDisplay();
    }
    
    settingsPanel.classList.remove('active');
});

workPhase.addEventListener('click', () => switchPhase('work'));
breakPhase.addEventListener('click', () => switchPhase('break'));

startBtn.addEventListener('click', () => startTimer());
resetBtn.addEventListener('click', resetTimer);

updateDisplay();