const slider = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft;

const mouseDown = (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const mouseUp = () => {
  isDown = false;
  slider.classList.remove("active");
};

const mouseLeave = () => {
  isDown = false;
  slider.classList.remove("active");
};

const mouseMove = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
};

slider.addEventListener("mousedown", mouseDown);
slider.addEventListener("mouseup", mouseUp);
slider.addEventListener("mousemove", mouseMove);
slider.addEventListener("mouseleave", mouseLeave);
