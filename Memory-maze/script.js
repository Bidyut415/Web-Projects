const board = document.getElementById("game-board");
const startBtn = document.getElementById("start-btn");
const levelText = document.getElementById("level");
const scoreText = document.getElementById("score");
const highscoreText = document.getElementById("highscore");
const message = document.getElementById("message");
const leaderboardList = document.getElementById("leaderboard-list");
const toggleTheme = document.getElementById("toggle-theme");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

let gridSize = 4;
let pattern = [];
let userPattern = [];
let level = 1;
let score = 0;
let highscore = localStorage.getItem("maze-highscore") || 0;

function createBoard() {
  board.innerHTML = '';
  for (let i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.dataset.index = i;
    tile.addEventListener("click", handleTileClick);
    board.appendChild(tile);
  }
}

function generatePattern() {
  pattern = [];
  for (let i = 0; i < level + 2; i++) {
    const index = Math.floor(Math.random() * (gridSize * gridSize));
    pattern.push(index);
  }
}

function showPattern() {
  let i = 0;
  const interval = setInterval(() => {
    const tile = document.querySelector(`.tile[data-index="${pattern[i]}"]`);
    tile.classList.add("active");

    setTimeout(() => tile.classList.remove("active"), 500);

    i++;
    if (i >= pattern.length) clearInterval(interval);
  }, 700);
}

function startGame() {
  level = 1;
  score = 0;
  updateInfo();
  message.textContent = '';
  nextRound();
}

function nextRound() {
  userPattern = [];
  generatePattern();
  showPattern();
}

function handleTileClick(e) {
  const index = parseInt(e.target.dataset.index);
  userPattern.push(index);

  if (index === pattern[userPattern.length - 1]) {
    correctSound.play();
    if (userPattern.length === pattern.length) {
      score += level * 10;
      level++;
      updateInfo();
      setTimeout(nextRound, 1000);
    }
  } else {
    wrongSound.play();
    gameOver();
  }
}

function gameOver() {
  message.textContent = `❌ Game Over! Final Score: ${score}`;
  if (score > highscore) {
    highscore = score;
    localStorage.setItem("maze-highscore", highscore);
  }
  saveToLeaderboard(score);
  updateInfo();
  renderLeaderboard();
  startBtn.disabled = false;
}

function updateInfo() {
  levelText.textContent = level;
  scoreText.textContent = score;
  highscoreText.textContent = highscore;
}

function saveToLeaderboard(newScore) {
  const scores = JSON.parse(localStorage.getItem("maze-leaderboard") || "[]");
  scores.push({ score: newScore, time: new Date().toLocaleString() });
  scores.sort((a, b) => b.score - a.score);
  localStorage.setItem("maze-leaderboard", JSON.stringify(scores.slice(0, 5)));
}

function renderLeaderboard() {
  const scores = JSON.parse(localStorage.getItem("maze-leaderboard") || "[]");
  leaderboardList.innerHTML = '';
  scores.forEach((entry, i) => {
    const li = document.createElement("li");
    li.textContent = `#${i + 1} - ${entry.score} pts (${entry.time})`;
    leaderboardList.appendChild(li);
  });
}

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  createBoard();
  startGame();
});

toggleTheme.addEventListener("change", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("maze-theme", document.body.classList.contains("light") ? "light" : "dark");
});

function loadTheme() {
  const theme = localStorage.getItem("maze-theme");
  if (theme === "light") {
    document.body.classList.add("light");
    toggleTheme.checked = true;
  }
}

loadTheme();
renderLeaderboard();
updateInfo();
