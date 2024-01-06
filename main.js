function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
      case 0:
          return 'rock';
      case 1:
          return 'paper';
      case 2:
          return 'scissors';
  }
}

function playRound() {
  let playerSelection = prompt('Choose rock, paper or scissors').toLowerCase();
  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
      return 'The game was a tie!';
  }
  if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
          return 'You lose! Paper beats rock';
      } else {
          return 'You won!';
      }
  }
  if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
          return 'You lose! Scissors beats paper';
      } else {
          return 'You won!';
      }
  }
  if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
          return 'You lose! Rock beats scissors';
      } else {
          return 'You won!';
      }
  }
}

for (let i = 0; i < 5; i++) {
  console.log(playRound());
}