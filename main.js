const start = document.querySelector(".main");
const stop = document.querySelector(".reset");
const div = document.querySelector(".time div");

let time = 0;
let active = true;
const stoper = () => {
  if (active) {
    active = !active;
    start.textContent = "Pause";
    id = setInterval(timer, 10);
  } else {
    start.textContent = "Start";
    active = !active;
    clearInterval(id);
  }
};
const timer = () => {
  time++;
  div.textContent = (time / 100).toFixed(2);
};

const clear = () => {
  clearInterval(id);
  active = true;
  div.textContent = "---";
  start.textContent = "Start";
  time = 0;
};

start.addEventListener("click", stoper);
stop.addEventListener("click", clear);
