let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".image");
const btn=document.querySelector("#btn");
const userSc=document.querySelector(".you_score");
const compSc=document.querySelector(".comp_score");
const btnNew=document.querySelector("#btn-new");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        compGenCh(userChoice);
    });
});

btnNew.addEventListener("click",()=>{
    resetGame();
});

const resetGame=()=>{
    userScore=0;
    compScore=0;
    compSc.textContent="0";
    userSc.textContent="0";
    btn.textContent="Play Your Move";
    btn.style.backgroundColor="black";
}

const compGenCh=(userChoice)=>{
    let compCh=Math.floor(Math.random()*3 +1);
    switch(compCh){
        case 1: compCh="rock";
        break;
        case 2: compCh="paper";
        break;
        case 3: compCh="scissors";
        break;
        default : alert("computer choice is invalid");
    }
    
    compare(compCh,userChoice);
}

const draw=()=>{
    btn.style.backgroundColor="black";
    btn.textContent="It Is a DRAW";
}

const displayUserScore=(userScore)=>{
    userSc.textContent=`${userScore}`;
}

const displayCompScore=(compScore)=>{
    compSc.textContent=`${compScore}`;
}

const userWinBtn=(userChoice,compCh)=>{
    btn.style.backgroundColor="green";
    btn.textContent=`You Won! ${userChoice} beats ${compCh}`; 
}

const compWinBtn=(userChoice,compCh)=>{
    btn.style.backgroundColor="red";
    btn.textContent=`You lost! ${compCh} beats ${userChoice}`; 
}

const compare=(compCh,userChoice)=>{
    if(compCh===userChoice){
        draw();
    }
    else if((compCh==="rock"&&userChoice==="paper")||(compCh==="paper"&&userChoice==="scissors")||(compCh==="scissors"&&userChoice==="rock")){
        userScore++;
        displayUserScore(userScore);
        userWinBtn(userChoice,compCh);
    }
    else{
        compScore++;
        displayCompScore(compScore);
        compWinBtn(userChoice,compCh);
    }
}

