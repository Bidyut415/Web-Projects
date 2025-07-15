const cells = document.querySelectorAll("[data-cell]");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");
const celebrationDiv = document.getElementById("celebration");
const winnerText = document.getElementById("winner-text");

let currentPlayer = "X"; // Player is X
let gameActive = true;

const winCombos = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6]          // diagonals
];

function startGame() {
  cells.forEach(cell => {
    cell.classList.remove("X", "O");
    cell.textContent = "";
    cell.addEventListener("click", handleClick, { once: true });
  });
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = "Your Turn";
  celebrationDiv.classList.add("hidden");
}

function handleClick(e) {
  const cell = e.target;
  if (!gameActive) return;

  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer);

  if (checkWin(currentPlayer)) {
    endGame(`${currentPlayer} Wins!`);
    return;
  }

  if (isDraw()) {
    endGame("It's a Draw!");
    return;
  }

  // Switch turn to computer
  currentPlayer = "O";
  statusText.textContent = "Computer's Turn";

  setTimeout(computerMove, 500); // delay to simulate thinking
}

function computerMove() {
  const emptyCells = [...cells].filter(cell => !cell.classList.contains("X") && !cell.classList.contains("O"));
  if (emptyCells.length === 0 || !gameActive) return;

  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  randomCell.textContent = currentPlayer;
  randomCell.classList.add(currentPlayer);
  randomCell.removeEventListener("click", handleClick);

  if (checkWin(currentPlayer)) {
    endGame(`Computer Wins!`);
    return;
  }

  if (isDraw()) {
    endGame("It's a Draw!");
    return;
  }

  currentPlayer = "X";
  statusText.textContent = "Your Turn";
}

function checkWin(player) {
  return winCombos.some(combination => {
    return combination.every(index => cells[index].classList.contains(player));
  });
}

function isDraw() {
  return [...cells].every(cell =>
    cell.classList.contains("X") || cell.classList.contains("O")
  );
}

function endGame(message) {
  statusText.textContent = message;
  gameActive = false;

  if (message.includes("Wins")) {
    winnerText.textContent = message;
    celebrationDiv.classList.remove("hidden");
  }
}

restartBtn.addEventListener("click", startGame);

startGame();
