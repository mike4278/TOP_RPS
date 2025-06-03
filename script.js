const weapons = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

let gameOver = false;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return weapons[randomNumber];
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

  const playerScoreValue = document.querySelector("#player-score");
  const computerScoreValue = document.querySelector("#computer-score");
  playerScoreValue.innerText = parseInt(playerScore);
  computerScoreValue.innerText = parseInt(computerScore);
}

function playRound(player) {
  if (gameOver) return;

  const playerChoice = player;
  const computerChoice = getComputerChoice();

  const reportResults = document.querySelector("#report");

  console.log("The player chose: " + playerChoice);
  console.log("The computer chose: " + computerChoice);

  const winner = determineWinner(playerChoice, computerChoice);
  console.log("The winner: " + winner);

  reportResults.innerText = `The player chose ${playerChoice},\nThe computer chose ${computerChoice}.\n\nRound winner: ${winner}!`;

  incrementScore(winner);
  displayScore(playerScore, computerScore);

  if (playerScore >= 5 || computerScore >= 5) {
    announceGameWinner(playerScore, computerScore);
    playAgain();
    gameOver = true;
  }
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

function setupButtons() {
  document
    .querySelector("#rock")
    .addEventListener("click", () => playRound("Rock"));
  document
    .querySelector("#paper")
    .addEventListener("click", () => playRound("Paper"));
  document
    .querySelector("#scissors")
    .addEventListener("click", () => playRound("Scissors"));
}

function playGame() {
  gameOver = false;
  resetScores();
  displayScore(playerScore, computerScore);

  // Clear winner and result texts
  document.querySelector("#winner").innerText = "";
  document.querySelector("#report").innerText = "";
  document.querySelector("#selection-text").innerText = "Make a selection";

  // Remove existing "Play Again" button if it exists
  const oldButton = document.querySelector("#play-again");
  if (oldButton) {
    oldButton.remove();
  }

  announceWinner();
}

function announceGameWinner(player, computer) {
  let gameWinner;
  if (player >= 5) {
    gameWinner = "Player";
  } else if (computer >= 5) {
    gameWinner = "Computer";
  }
  const winnerSpace = document.querySelector("#winner");
  winnerSpace.innerText = `WINNER: ${gameWinner}!`;
}

function playAgain() {
  // Don't add if already exists
  if (document.querySelector("#play-again")) return;

  const playAgainButton = document.createElement("button");
  playAgainButton.id = "play-again"; // for targeting/removal
  playAgainButton.innerText = "Press to Play Again";

  playAgainButton.addEventListener("click", playGame);

  const announceArea = document.querySelector(".announce");
  announceArea.appendChild(playAgainButton);
}

setupButtons();
playGame();
