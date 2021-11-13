let keyDowns = {};

window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  if (!keyDowns[e.code]) {
    keyDowns[e.code] = true;
    key.classList.add("playing");
  }
});

window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  const keyCode = keyDowns[e.code];
  if (keyCode) {
    keyDowns[e.code] = null;
    key.classList.remove("playing");
  }
});
