let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#user-score");  
const cscore = document.querySelector("#comp-score");  

const getCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() *3);
    return option[randomIdx];
}

const drawGame = () =>{
    console.log("draw was game");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin==true){
        userScore++;
        uscore.innerText = userScore;
        console.log("You Win !")
        msg.innerText = `You win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        console.log("You lose !")
        msg.innerText = `You lose. ${userChoice} beats ${compChoice}`;
        cscore.innerText = compScore;
        msg.style.backgroundColor = "red"
    }
}

const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    const compChoice = getCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true ;
        }else if(userChoice ==="paper"){
            userWin = compChoice =="scissors" ? false : true ;
        }else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});