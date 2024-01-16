let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "player";
  }

  return "computer";
}

function updateScores(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

function updateDOM(winner, playerSelection, computerSelection) {
  let resultMessage;
  if (winner === "player") {
    resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (winner === "computer") {
    resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    resultMessage = "It's a draw!";
  }

  document.getElementById("results").textContent = resultMessage;
  document.getElementById(
    "score"
  ).textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let winner = determineWinner(playerSelection, computerSelection);

  updateScores(winner);
  updateDOM(winner, playerSelection, computerSelection);

  if (isGameOver()) {
    let gameWinner = playerScore === 5 ? "Player" : "Computer";
    document.getElementById(
      "results"
    ).textContent = `${gameWinner} won the game!`;

    // Disable the game buttons
    buttons.forEach((button) => {
      button.disabled = true;
    });

    // Enable and show the reset button
    let resetButton = document.querySelector(".reset");
    resetButton.disabled = false;
    resetButton.style.display = "block";
  }
}
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    if (button.id !== "reset") {
      playRound(event.target.value);
    }
  });
});

// Hide the reset button at the start of the game
document.querySelector(".reset").style.display = "none";

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  let resultsElement = document.getElementById("results");
  if (resultsElement) {
    resultsElement.textContent = "";
  } else {
    console.error("Element with id 'results' does not exist");
  }

  let scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = "";
  } else {
    console.error("Element with id 'score' does not exist");
  }

  // Enable and show the game buttons
  buttons.forEach((button) => {
    button.disabled = false;
    button.style.display = "inline-block";
  });

  // Disable and hide the reset button
  let resetButton = document.querySelector(".reset");
  resetButton.disabled = true;
  resetButton.style.display = "none";
}

document.getElementById("reset").addEventListener("click", resetGame);

// Function to check if the game is over
function isGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    // Hide the game buttons
    buttons.forEach((button) => {
      if (button.id !== "reset") {
        button.style.display = "none";
      }
    });
    // Show the reset button
    let resetButton = document.querySelector(".reset");
    resetButton.style.display = "inline-block";
    return true;
  }
  return false;
}
