var hitRandom = 0;
let timer = 60;

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 168; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#p-bottom").innerHTML = clutter;
}

function runTimer() {
  var time = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer-val").innerHTML = timer;
    } else {
      clearInterval(time);
      document.querySelector(
        "#p-bottom"
      ).innerHTML = `Game Over Your Score : <h1>${score}</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitRandom = Math.floor(Math.random() * 10);
  document.querySelector("#hit-val").textContent = hitRandom;
}

var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#score-val").innerHTML = score;
}
document.querySelector("#start-btn").addEventListener("click", () => {
  score = 0;
  timer = 60;
  document.querySelector("#score-val").innerHTML = score;
  document.querySelector("#timer-val").innerHTML = timer;
  makeBubble();
  getNewHit();
  runTimer();
});

document.querySelector("#p-bottom").addEventListener("click", (details) => {
  let clicked = Number(details.target.textContent);
  if (clicked === hitRandom) {
    increaseScore();
    getNewHit();
    makeBubble();
  }
});
// makeBubble();
// getNewHit();
// runTimer();
