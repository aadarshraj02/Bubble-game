let clutter = "";

for (let i = 1; i <= 147; i++) {
  clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
}
document.querySelector("#p-bottom").innerHTML = clutter;
