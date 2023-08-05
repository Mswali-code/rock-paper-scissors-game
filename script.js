let playerScore = 0;
let computerScore = 0;
const winningScore = 5;
let gameOver = false;    

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beats Paper";
  }
};

const buttonsNodeList = document.querySelectorAll("button");
const buttonsArray = [...buttonsNodeList];

buttonsArray.forEach((button) => {
  button.addEventListener("click", () => {
    if (!gameOver) {
      const playerSelection = button.textContent;
      const computerSelection = getComputerChoice();
      const  result = playRound(playerSelection, computerSelection);
      displayResult(result);
      checkWinner();
    };
  });
});

function displayResult (result) {
  const  resultDiv = document.querySelector("#results");
  const resultParagraph = document.createElement("p");

  resultParagraph.textContent = result;
  resultDiv.appendChild(resultParagraph);

  const scoreDiv = document.querySelector("#score");
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
};

function checkWinner() {
  if (playerScore === winningScore || computerScore === winningScore) {
    gameOver = true;

    const winner = playerScore === winningScore ? "Player" : "computer";
    displayResult(`Game over! ${winner} wins!`);
  }
};