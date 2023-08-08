let playerScore = 0;
let computerScore = 0;
const winningScore = 5;
let gameOver = false;
let playerSelection = "";
let computerSelection = "";    

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie! Try again!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    if (playerScore === 1) {
      return "You win! Great start!";
    } else if (playerScore === 2) {
      return "You're on fire! Keep going!";
    } else if (playerScore === 3) {
      return "Awesome! You're dominating!";
    } else if (playerScore === 4) {
      return "Incredible! One more point to win!";
    } else {
      return "Congratulations! You win the game!";
    }
  } else {
    computerScore++;
    if (computerScore === 1) {
      return "You lose! Keep trying!";
    } else if (computerScore === 2) {
      return "Don't give up! You'll get it!";
    } else if (computerScore === 3) {
      return "You can do it! Keep going!";
    } else if (computerScore === 4) {
      return "Almost there!";
    } else {
      return "Sorry, Computer wins this game. Better luck next time!";
    }
  }
};

const playerButtonsNodeList = document.querySelectorAll(".player-buttons button");
const playerButtonsArray = [...playerButtonsNodeList];

playerButtonsArray.forEach((playerButton) => {
  playerButton.addEventListener("click", () => {
    if (!gameOver) {
      const playerSelection = playerButton.textContent;
      const computerSelection = getComputerChoice();

      const playerButtons = document.querySelectorAll(".player-buttons button");
      playerButtons.forEach((playerButton) => {
        playerButton.classList.remove("player-selected");
        playerButton.classList.remove("enlarge");
      });

      playerButton.classList.add("enlarge");
      playerButton.classList.add("player-selected");

      const computerButtons = document.querySelectorAll(".computer-buttons button");
      computerButtons.forEach((computerButton) => {
        computerButton.classList.remove("computer-selected");
        computerButton.classList.remove("enlarge"); 
      });

      const  result = playRound(playerSelection, computerSelection);
      displayResult(result);

      const computerSelectedButton = document.querySelector(".computer-buttons #computer-" + computerSelection.toLowerCase() + "-btn");
      computerSelectedButton.classList.add("enlarge");
      computerSelectedButton.classList.add("computer-selected");

      checkWinner();
    };
  });
});

function displayResult (result) {
  const scoreDiv = document.querySelector("#score");
  const computerScoreDiv = document.querySelector("#computer-score");
  const playerScoreDiv = document.querySelector("#player-score");
  const firstToScoreDiv = document.querySelector(".text");


  firstToScoreDiv.textContent = result;
  playerScoreDiv.textContent = playerScore;
  computerScoreDiv.textContent = computerScore;

  scoreDiv.innerHTML = `<span id="player-score">${playerScore}</span>  <span id="computer-score">${computerScore}</span>`;

};

function checkWinner() {
  if (playerScore === winningScore || computerScore === winningScore) {
    gameOver = true;

    if (playerScore === winningScore) {

      displayResult("Congratulations! You nailed it! Well played!");
    } else {

      displayResult("Game over! Computer wins. Better luck next time!");
    }
  }
};