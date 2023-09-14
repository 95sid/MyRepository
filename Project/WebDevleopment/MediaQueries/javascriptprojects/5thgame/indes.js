const buttonsEl = document.querySelectorAll("button");
const resultel = document.getElementById("result");
resultel.textContent = "";
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
let Uscore = 0;
let Cscore = 0;
let flag = -1;

function printScore(){
    if(flag == 0){
        Uscore++;
        userScoreEl.textContent = Uscore;
    }
    else if(flag == 1){
        Cscore++;
        computerScoreEl.textContent = Cscore;
    }
    flag = -1;
}
buttonsEl.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, makeComputerChoice());
    console.log(result);
    resultel.innerText = result;
    printScore();
  });
});

function makeComputerChoice() {
  const options = ["Rock", "Paper", "Seasor"];
  const Computerchoice = Math.floor(Math.random() * options.length);
  return options[Computerchoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "It's a tie";
  else if (
    (playerSelection === "Rock" && computerSelection === "Seasor") ||
    (playerSelection === "Seasor" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    flag = 0;
    return "You win ! " + playerSelection + " beats " + computerSelection;
  } else {
    flag = 1;
    return "You Lose ! " + computerSelection + " beats " + playerSelection;
  }
}
