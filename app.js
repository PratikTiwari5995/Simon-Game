let h3 = document.querySelector("h3");
let btns = ["yellow", "red", "green", "blue"];
let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;


document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game is started");
        start = true;
        levelUp();
    }
});


function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
}


function impFlashBtn(btn) {
    btn.classList.add("inputFlash");
    setTimeout(function () {
        btn.classList.remove("inputFlash");
    }, 1000);
}


function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    flashBtn(randBtn);
}


function checkAns() {
    console.log("current", level);
    let idx = userSeq.length - 1;
    console.log(userSeq[idx]);
    console.log(gameSeq[idx]);

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        h3.innerHTML = `Game over your score is <b> ${level * 10} </b> <br> Press any key to restart the game`;
        document.querySelector("body").style.color("red");
        setTimeout(document.querySelector("body").style.color("white"), 150)
        reset();

    }
}



function btnPress() {
    console.log(this);
    let impBtn = this;
    impFlashBtn(impBtn);
    userColor = impBtn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length - 1);
}


let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnPress);
}


function reset() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    start = false;

}

