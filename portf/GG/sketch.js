let cols, rows;
let w = 100;
let h = 100;
let currentCol, currentRow;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / w);
  rows = floor(height / h);
  currentCol = 0;
  currentRow = 0;
  grid = createEmptyGrid(cols, rows);
  frameRate(1); // Set frame rate to 1 to simulate dice roll every second
}

function draw() {
  background(220);
  drawGrid();
  let diceRoll = floor(random(1, 7));
  performAction(diceRoll);
}

function createEmptyGrid(cols, rows) {
  noStroke(); 
  let grid = [];
  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = { 
        horizontalLine: false,
        verticalLines: false,
        diagonalLines: false,
      };
    }
  }
  return grid;
}

function drawGrid() {
  noStroke(); // Disable stroke for grid lines
  fill(200); // Set the fill color to light grey
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rect(i * w, j * h, w, h);
      if (grid[i][j].horizontalLine) { 
        drawHorizontalLine(i, j);
      }
      if (grid[i][j].verticalLines) {
        drawVerticalLines(i, j);
      }
      if (grid[i][j].diagonalLines) {
        drawDiagonalLines(i, j);
      }
    }
  }
}

function performAction(diceRoll) {
  switch (diceRoll) {
    case 1:
      currentRow = (currentRow - 1 + rows) % rows;
      grid[currentCol][currentRow].horizontalLine = true;
      break;
    case 2:
      currentRow = (currentRow + 1) % rows;
      grid[currentCol][currentRow].horizontalLine = true;
      break;
    case 3:
      currentCol = (currentCol + 1) % cols;
      grid[currentCol][currentRow].verticalLines = true;
      break;
    case 4:
      currentCol = (currentCol - 1 + cols) % cols;
      grid[currentCol][currentRow].verticalLines = true;
      break;
    case 5:
      currentCol = (currentCol + 1) % cols;
      currentRow = (currentRow - 1 + rows) % rows;
      break;
    case 6:
      currentCol = (currentCol + 1) % cols;
      currentRow = (currentRow + 1) % rows;
      break;
  }
}

function drawHorizontalLine(col, row) {
  stroke(0);
  line(col * w, row * h + h / 2, col * w + w, row * h + h / 2);
}

function drawVerticalLines(col, row) {
  stroke(0);
  for (let i = 1; i <= 3; i++) {
    line(col * w + (i * w / 4), row * h, col * w + (i * w / 4), row * h + h);
  }
}

function drawDiagonalLines(col, row) {
  stroke(0);
  for (let i = 1; i <= 3; i++) {
    line(col * w, row * h + (i * h / 4), col * w + w, row * h + (i * h / 4));
  }
}
