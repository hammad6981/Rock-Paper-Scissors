let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara= document.querySelector("#your");
const compscorepara= document.querySelector("#pc");

const gencompchoice =() => {
const options=["Rock", "Paper", "Scissor"];
const randindx=Math.floor(Math.random()*3)
return options[randindx];
};

const drawgame = () =>{
    console.log("game was darw.");
    msg.innerText="Game was draw./ Paly Again";
    msg.style.backgroundColor="lightslategrey";
}

const showWinner=(userWin, userchoice, compchoice)=>{
if (userWin){
    userscore++;
    userscorepara.innerText=userscore;
    console.log("You Win!");
    msg.innerText=` You Win! Your ${userchoice} beats ${compchoice} ` ;

    msg.style.backgroundColor="green";
}else{
    compscore++;
    compscorepara.innerText=compscore;
    console.log("You lose");
    msg.innerText= ` You lost! ${compchoice} beats Your ${userchoice} `;
    msg.style.backgroundColor="red  ";
}
}

const playgame =(userchoice) =>{
console.log("user choice=", userchoice);
const compchoice= gencompchoice();
console.log("comp choice=", compchoice );
if(userchoice===compchoice){
drawgame();
}
else{
    let userWin=true;

if (userchoice==="Paper") {
    userWin = compchoice==="Scissor" ? false : true;
}
   else if(userchoice==="Scissor"){
userWin=compchoice==="Rock" ? false: true;
   }
   else {
    userWin = compchoice==="Paper"? false: true;
   }
   showWinner(userWin, userchoice, compchoice);
}
};

choices.forEach ((choice)=>{
choice.addEventListener("click", ()=> {
    const userchoice=choice.getAttribute("id")
playgame(userchoice);

});
});