let gameseq = []
let userseq = []
let h3 = document.querySelector("h3");
let num = 0;
let game = false;
let body = document.querySelector("body")


document.addEventListener("keypress", function() {
    if (game == false) {
        game = true;
        
        levelup();
    }
});


let allbtn = document.querySelectorAll(".btn");
    for (btn of allbtn) {
        btn.addEventListener("click", btnpress);
}


function flashbtn(btn) {   
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
};

function flashuserbtn(btn) {   
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 300);
};

function levelup() {
    userseq = []
    num++;
    h3.innerText = `Level ${num}`;
    let random = (Math.floor(Math.random()*4))+1
    let ranbtn = document.querySelector(`.b${random}`);

    flashbtn(ranbtn)
    gameseq.push(ranbtn.id)
    console.log(gameseq)
}

function btnpress() {
    let btn = this;    
    flashuserbtn(btn);
    color = btn.getAttribute("id");
    userseq.push(color);

    checkans(userseq.length-1);
    
}


function checkans(indx) {
        if (userseq[indx] == gameseq[indx]) {
            if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000)
        }
    } else {
    h3.innerHTML = `Game Over! Your Score was <b>${num}</b> <br>Press any key to start `
    reset()
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "white";

    }, 200)
    }
}


function reset() {
    userseq = []
    game = false;
    num = 0;
    gameseq=[];
}