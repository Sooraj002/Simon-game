let gameseq = [];
let userseq = [];
let h3 = document.querySelector("h3");
let num = 0;
let game = false;

// Function to start the game
function startGame() {
  if (!game) {
    game = true;
    levelUp();
  }
}

// Event listener for any keypress or mobile start button click
document.addEventListener("keypress", startGame);
document.querySelector(".p-btn-mobile").addEventListener("click", startGame);

// Event listener for button clicks
let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) {
  btn.addEventListener("click", btnPress);
}

function flashBtn(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function flashUserBtn(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  userseq = [];
  num++;
  h3.innerText = `Level ${num}`;
  let random = Math.floor(Math.random() * 4) + 1;
  let ranbtn = document.querySelector(`.b${random}`);

  flashBtn(ranbtn);
  gameseq.push(ranbtn.id);
  console.log(gameseq);
}

function btnPress() {
  let btn = this;
  flashUserBtn(btn);
  let color = btn.getAttribute("id");
  userseq.push(color);

  checkAnswer(userseq.length - 1);
}

function checkAnswer(index) {
  if (userseq[index] == gameseq[index]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game Over! Your Score was <b>${num}</b><br>Press any key or Start to play again.`;
    reset();
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
  }
}

function reset() {
  userseq = [];
  game = false;
  num = 0;
  gameseq = [];
}
