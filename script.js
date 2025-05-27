const weapons = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return weapons[randomNumber];
}

function getPlayerChoice() {
  const userChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
  let corrected = userChoice.trim().toLowerCase();
  corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
  //   console.log(corrected);
  return corrected;
}

function determineWinner(player, computer) {
  if (player === computer) return "Tie";

  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "Player";
  }

  return "Computer";
}

function incrementScore(winner) {
  if (winner == "Player") {
    playerScore++;
  } else if (winner == "Computer") {
    computerScore++;
  } else if (winner == "Tie") {
    console.log("Round tied");
  }
}

function displayScore(playerScore, computerScore) {
  console.log("The computer has a score of: " + parseInt(computerScore));
  console.log("The player has a score of: " + parseInt(playerScore));
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log("The player chose: " + playerChoice);
  console.log("The computer chose: " + computerChoice);
  const winner = determineWinner(playerChoice, computerChoice);
  console.log("The winner: " + winner);
  incrementScore(winner);
  displayScore(playerScore, computerScore);
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

function announceWinner() {
  if (playerScore > computerScore) {
    console.log("Congratulations! You win!");
  } else if (computerScore > playerScore) {
    console.log("The computer wins!");
  } else {
    console.log("The match is a tie!");
  }
}

function playGame() {
  resetScores();
  for (i = 0; i < 5; i++) {
    playRound();
  }
  announceWinner();
}

playGame();
