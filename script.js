let timer;
let seconds = 0;
let running = false;

function formatTime(sec) {
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = sec % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            document.querySelector('.timer h1').innerText = formatTime(seconds);
        }, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    running = false;
    clearInterval(timer);
});

document.getElementById('settings').addEventListener('click', () => {
    let newTime = prompt("Enter new time in seconds:", seconds);
    if (!isNaN(newTime)) {
        seconds = parseInt(newTime);
        document.querySelector('.timer h1').innerText = formatTime(seconds);
    }
});

document.getElementById('save').addEventListener('click', () => {
    alert(`Current timer value: ${formatTime(seconds)}`);
});

document.getElementById('help').addEventListener('click', () => {
    alert("Timer Instructions:\n\n- Start: Begins the timer.\n- Stop: Pauses the timer.\n- Settings: Set a custom time.\n- Save: Save current time.");
});

document.getElementById('fullscreen').addEventListener('click', () => {
    let elem = document.documentElement;
    if (!document.fullscreenElement) {
        elem.requestFullscreen().then(() => {
            document.querySelector('.container').classList.add('fullscreen');
        }).catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen().then(() => {
            document.querySelector('.container').classList.remove('fullscreen');
        }).catch(err => {
            alert(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
        });
    }
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.querySelector('.container').classList.remove('fullscreen');
    }
});


// Rain effect script
function createRain() {
  const rainContainer = document.getElementById('rain');
  for (let i = 0; i < 100; i++) {
    const rainDrop = document.createElement('div');
    rainDrop.classList.add('rain-drop');
    rainDrop.style.left = `${Math.random() * 100}vw`;
    rainDrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    rainContainer.appendChild(rainDrop);
  }
}

window.onload = createRain;
