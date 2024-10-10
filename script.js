let randomIndex;
let hit = true;
let isStarted = false;
let isPaused = false;
let interval;
let timeBetweenZombies = 3000; //time between zombie spawns 
let nextZombieTime = timeBetweenZombies; // save time until the next appearance of zombies
let startTime; // the time when the last zombie appeared
let remainingTime; // to save time when paused

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

const items = document.querySelectorAll(".item");
const missCounter = document.getElementById("miss-counter");
const zombieImg = document.createElement("img");
zombieImg.src = "images/ghost.webp";
const hitImg = document.createElement("img");
hitImg.src = "images/blood.webp";
const startBtn = document.getElementById("start-btn");
const bu = document.getElementById("sound-bu");
const soundBtn = document.getElementById("sound-btn");
const shot = document.getElementById("sound-shot");
const hitCounter = document.getElementById("hit-counter");
const pauseBtn = document.getElementById("pause-btn");

function spawnZombie() {
  randomIndex = getRandomIndex(items);
  items[randomIndex].append(zombieImg);
  startTime = Date.now(); // record the time of appearance of the last zombie
}

function gameLoop() {
  interval = setInterval(function () {
    let currentTime = Date.now();
    let elapsed = currentTime - startTime;

    if (!isPaused && elapsed >= nextZombieTime) {
      if (hit === true) {
        hit = false;
      } else {
        missCounter.innerText++;
      }
      spawnZombie();
      nextZombieTime = timeBetweenZombies; // update the timer for the next zombie
      hitImg.remove();
    }
  }, 100); // check every 100ms to display zombies at the right time
}

soundBtn.onclick = function () {
  if (bu.currentTime) {
    bu.pause();
    bu.currentTime = 0;
    soundBtn.innerHTML = "SOUND ON";
  } else {
    bu.play();
    soundBtn.innerHTML = "SOUND OFF";
  }
};

startBtn.onclick = function () {
  if (!isStarted) {
    isStarted = true;
    spawnZombie();
    gameLoop();
    startBtn.innerText = "STOP";
  } else {
    isStarted = false;
    clearInterval(interval);
    startBtn.innerText = "START";
    hitCounter.innerText = 0;
    missCounter.innerText = 0;
    zombieImg.remove();
    hitImg.remove();
  }
};

zombieImg.onclick = function () {
  if (isPaused) return; // do not allow shooting when the game is paused
  hit = true;
  shot.currentTime = 0;
  shot.play();
  zombieImg.remove();
  items[randomIndex].append(hitImg);
  hitCounter.innerText++;
};

pauseBtn.onclick = function () {
  if (!isPaused) {
    clearInterval(interval); // stop the game
    isPaused = true;
    pauseBtn.innerText = "RESUME";
    remainingTime = nextZombieTime - (Date.now() - startTime); // save the remaining time
  } else {
    isPaused = false;
    pauseBtn.innerText = "PAUSE";
    nextZombieTime = remainingTime; // restore the remaining time
    gameLoop(); // continue the game
  }
};
