let num = document.getElementById("num");
btn.addEventListener("click", randono);

function magicno() {
  return Math.trunc(Math.random() * 10);
}
let count;
function randono() {
  count = 0;
  let nums = magicno();
  let btn = document.getElementById("btn");
  num.innerHTML = nums;
  let newno = [];

  while (newno.length < 10) {
    let random = magicno();
    if (!newno.includes(random)) {
      newno.push(random);
    }
  }

  let insidebox = newno
    .map(
      (setbox) =>
        `<div onClick=finalbox(event) data-target=${setbox}>${setbox}</div>`
    )
    .join("");
  let box = document.getElementById("container");
  box.innerHTML = insidebox;
}

function finalbox(event) {
  count += 1;
  let newnum = event.target.dataset.target;
  if (count <= 3) {
    if (newnum == num.innerText) {
      event.target.classList.add("active-success");
    } else {
      event.target.classList.add("active");
    }
  } else {
    alert("game Over");
  }
}

//setting random no
