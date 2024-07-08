let clutter = "";

for (let i = 1; i <= 147; i++) {
  clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
}
document.querySelector("#p-bottom").innerHTML = clutter;

let timer = 60;
function runTimer() {
  var time = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer-val").innerHTML = timer;
    } else {
      clearInterval(time);
    }
  }, 1000);
}

function getNewHit() {
  random = Math.floor(Math.random() * 10);
  document.querySelector("#hit-val").innerHTML = random;
}

getNewHit();

runTimer();
