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






























































































































































































/*

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
    }

    function displayScores() {
      const scoreElement = document.querySelector("score");
      scoreElement.innerHTML = `
        <p>Player: ${playerScore}</p>
        <p>Computer: ${computerScore}</p>
      `;
    }

    function displayRoundResult(roundResult) {
      const resultElement = document.querySelector("result");
      const p = document.createElement("p");
      p.textContent = roundResult;
      resultElement.appendChild(p);
    }

    function checkWinner() {
      if (playerScore === winningScore || computerScore === winningScore) {
        gameOver = true;
        const resultElement = document.querySelector("result");
        const p = document.createElement("p");
        if (playerScore === winningScore) {
          p.textContent = "Congratulations! You win the game!";
        } else {
          p.textContent = "Oh no! You lost the game. Better luck next time!";
        }
        resultElement.appendChild(p);

        document.querySelector("rock-btn").disabled = true;
        document.querySelector("paper-btn").disabled = true;
        document.querySelector("scissors-btn").disabled = true;
      }
    }

    function playGame(playerSelection) {
      if (gameOver) {
        return;
      }

      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      const finalResult = `You chose ${playerSelection}, Computer chose ${computerSelection}. ${roundResult}`;
      displayRoundResult(finalResult);
      displayScores();
      checkWinner();
    }

    document.querySelector("rock-btn").addEventListener("click", function () {
      playGame("rock");
    });

    document.querySelector("paper-btn").addEventListener("click", function () {
      playGame("paper");
    });

    document.querySelector("scissors-btn").addEventListener("click", function () {
      playGame("scissors");
    }); */