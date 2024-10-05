let userSeq = [];
let gameSeq = [];
let level = 0;
let h3 = document.querySelector("h3");
let started = false;
let btns = ["red", "green", "blue", "orange"];

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUP();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUP() {
  userSeq = [];
  level++;
  h3.innerText = `level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  btnFlash(randBtn);
  gameSeq.push(randColor);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUP, 1000);
    }
  } else {
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "#3C3D37";
    }, 100);
    h3.innerText = "GAME OVER press any key to start again";
    started = false;
    level = 0;
    gameSeq = [];
  }
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", function () {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
  });
}
