let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let score = [];

let btns = ["yellow", "red" , "purple" ,  "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is Started");
    started = true;

    levelUp();
  }
});

function btnFlash(btn){
    btn.classList.add("flash");  
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randInd = Math.floor(Math.random() * 3);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function chechAns(idx){

    if(userSeq[idx] == gameSeq [idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
       }
    }else{
        
        score.push(gameSeq.length);
        //let maxScore = Math.max(...score);
        h2.innerText = `Game Over!your max score is ${Math.max(...score)} Press any key to Restart`;
        console.log(score);
        reset();
    }
};


function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    chechAns(userSeq.length-1);

};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
