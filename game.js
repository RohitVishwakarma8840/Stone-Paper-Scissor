let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompuChoice=()=>{
// choices rock paper scissor
const options=["rock","paper","scissor"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
}

const drawgame=()=>{
    console.log("the game was draw ");
    msg.innerText="Game was draw ! play again";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin)=>{

if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you wins !");
    msg.innerText="You win !";
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("you lost");
   msg.innerText="You lost !";
   msg.style.backgroundColor="red";
}

}

const playGame=(userChoice)=>{

console.log("user choice = ",userChoice);
// generate computer choice 

const compChoice=genCompuChoice();
console.log("comp choice is ",compChoice);

if(userChoice==compChoice){
    // draw game
    drawgame();
}
else{
 let userWin=true;
 if(userChoice==="rock"){
 // scissor,paper

userWin=compChoice==="paper" ? false : true ;
 }
else if(userChoice==="paper"){
  // rock ,scissor
    userWin=compChoice==="scissor" ? true : false ;
}
else{
// user ke paas =>scissor 
// compchoice will be rock ,paper
userWin=compChoice==="rock" ? false : true ;
}

showWinner(userWin);

}


};





choices.forEach((choice)=>{
    // console.log(choice);
choice.addEventListener("click",()=>{
  
    const userChoice=choice.getAttribute("id");
    console.log("choice was clicked ",userChoice);
    playGame(userChoice);
})
});







