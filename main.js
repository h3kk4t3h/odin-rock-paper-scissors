let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

document.getElementById('reset').addEventListener('click', resetGame);

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('results').textContent = '';
  document.getElementById('score').textContent = '';

  // Enable the game buttons
  buttons.forEach((button) => {
    button.disabled = false;
  });

  // Disable the reset button
  document.getElementById('reset').disabled = true;
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = '';

  if (playerSelection === computerSelection) {
    result = 'The game was a tie!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    result = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    computerScore++;
  } else {
    result = 'You won! ' + playerSelection + ' beats ' + computerSelection;
    playerScore++;
  }

  document.getElementById('results').textContent = result;
  document.getElementById('score').textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    let winner = playerScore === 5 ? 'Player' : 'Computer';
    document.getElementById('results').textContent = `${winner} won the game!`;

    // Disable the game buttons
    buttons.forEach((button) => {
      button.disabled = true;
    });

    // Enable the reset button
    document.getElementById('reset').disabled = false;
  }
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', function(event) {
    playRound(event.target.value);
  });
});