let box1 = document.createElement("div");

let x = {
  top: 30,
  left: 30,
};

document.addEventListener("keydown", moveBox);
document.addEventListener("click", newBox);


function newBox() {
  document.body.appendChild(box1);
}



function moveBox(e) {
  if (e.keyCode === 37) {
    x.left -= 10;
  }
  if (e.keyCode === 38) {
    x.top -= 10;
  }
  if (e.keyCode === 39) {1
    x.left += 10;
  }
  if (e.keyCode === 40) {
    x.top += 10;
  }

  box1.style.top = x.top + "px";
  box1.style.left = x.left + "px";
}
