let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice1");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; // Corrected from 'option' to 'options'
};

const drawGame = () => {
   msg.innerText = "Game was Draw. Play again.";
   msg.style.backgroundColor = "#081c32";
};

const showWinner = (userWin, userChoice, computerChoice) => {
   if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
   } else {
     computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
};

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    if(userChoice === computerChoice) {
        // Draw game
        drawGame();
    } else {
       let userWin = true;
       if(userChoice === "stone") {
        // stone beats scissors, loses to paper
        userWin = computerChoice === "paper" ? false : true;
       } else if(userChoice === "paper") {
        // paper beats stone, loses to scissors
        userWin = computerChoice === "scissors" ? false : true;
       } else {
        // scissors beats paper, loses to stone
        userWin = computerChoice === "stone" ? false : true;
       }
       showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice1) => {
    choice1.addEventListener("click", () => {
        const userChoice = choice1.getAttribute("id");
        playGame(userChoice);
    });
});
