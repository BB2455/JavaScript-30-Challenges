const boxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    boxes.forEach((box) => {
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) box.checked = true;
    });
  } else if (e.shiftKey) {
    boxes.forEach((box) => {
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) box.checked = false;
    });
  }
  lastChecked = this;
}

boxes.forEach((box) => box.addEventListener("click", handleCheck));
