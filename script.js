const GRID_SIZE = 10;      // 10x10 board
const MINES_COUNT = 10;

let mines = new Set();
let gameOver = false;
let flags = new Set();



const board = document.getElementById("board");

function placeMines() {
  mines.clear();
  while (mines.size < MINES_COUNT) {
    const mineIndex = Math.floor(Math.random() * GRID_SIZE * GRID_SIZE);
    mines.add(mineIndex);
  }
}

// Create the grid
function createBoard() {
  board.innerHTML = ""; // clear existing grid
  board.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;

  placeMines();

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;

    //TEMP: Show mines for testing
    if (mines.has(i)) {
      cell.textContent = "💣";
      cell.classList.add("mine");
    }

    cell.addEventListener("click", () => handleCellClick(cell));
    board.appendChild(cell);

    cell.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      toggleFlag(cell);
    });
  }
}

function handleCellClick(cell) {
  if (gameOver || cell.classList.contains("revealed") || cell.classList.contains("flag")) return;
  const index = Number(cell.dataset.index);

  if (mines.has(index)) {
    revealAllMines();
    cell.classList.add("mine-hit");
    gameOver = true;
    setTimeout(() => {
      alert("Game Over! You hit a mine.");
    }, 100);

    return;
  }

  revealEmptyCells(index);
  checkWin();
}

function toggleFlag(cell) {
  if (gameOver || cell.classList.contains("revealed")) return;
  const index = Number(cell.dataset.index);

  if (flags.has(index)) {
    flags.delete(index);
    cell.textContent = "";
    cell.classList.remove("flag");
  } else {
    flags.add(index);
    cell.textContent = "🚩"
    cell.classList.add("flag");
  }
}

function revealAllMines() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    const index = Number(cell.dataset.index);
    if (mines.has(index)) {
      cell.textContent = "💣";
      cell.classList.add("mine");
    }
  });
}

function getRowCol(index) {
  return {
    row: Math.floor(index / GRID_SIZE),
    col: index % GRID_SIZE,
  };
}

function countAdjacentMines(index) {
  const { row, col } = getRowCol(index);
  let count = 0;

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r < 0 || r >= GRID_SIZE || c < 0 || c >= GRID_SIZE) continue;
      if (r === row && c === col) continue;
      
      const neighborIndex = r * GRID_SIZE + c;
      if (mines.has(neighborIndex)) {
        count++;
      }
    }
  }
  
  return count;
}

function revealEmptyCells(index) {
  const cells = document.querySelectorAll(".cell");
  const cell = cells[index];

  if (!cell || cell.classList.contains("revealed")) return;

  cell.classList.add("revealed");

  const mineCount = countAdjacentMines(index);
  if (mineCount > 0) {
    cell.textContent = mineCount;
    cell.classList.add(`n${mineCount}`);
    return;
  }
  const { row, col } = getRowCol(index);
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r < 0 || r >= GRID_SIZE || c < 0 || c >= GRID_SIZE) continue;
      
      const neighborIndex = r * GRID_SIZE + c;
      revealEmptyCells(neighborIndex);
    }
  }
}

function checkWin() {
  const cells = document.querySelectorAll(".cell");
  let revealedCount = 0;

  cells.forEach((cell) => {
    if (cell.classList.contains("revealed")) {
      revealedCount++;
    }
  });

  const totalSafeCells = GRID_SIZE * GRID_SIZE - MINES_COUNT;

  if (revealedCount === totalSafeCells) {
    gameOver = true;
    alert("You Win! All safe cells revealed.");
  }
}

function resetGame() {
  gameOver = false;
  flags.clear();
  mines.clear();
  createBoard();
}

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", resetGame);


createBoard();
