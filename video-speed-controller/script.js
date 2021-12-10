const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

let isDown = false;

function handleMove(e) {
  e.preventDefault();
  if (!isDown) return;
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.5;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(1) + "x";
  video.playbackRate = playbackRate;
}

function handleDown(e) {
  isDown = true;
}

const handleUp = () => {
  isDown = false;
};

speed.addEventListener("mousemove", handleMove);
speed.addEventListener("mousedown", handleDown);
speed.addEventListener("mouseup", handleUp);
