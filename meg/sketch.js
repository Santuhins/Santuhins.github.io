let gridSize = 80; // Size of each grid square
let cols, rows;
let currentX, currentY;

function setup() {
  createCanvas(480, 400);
  cols = width / gridSize;
  rows = height / gridSize;
  currentX = 0;
  currentY = 0;
  background(255);
  drawGrid();
  rollDiceAndDraw();
}

function drawGrid() {
  stroke(200);
  for (let i = 0; i <= cols; i++) {
    line(i * gridSize, 0, i * gridSize, height);
  }
  for (let j = 0; j <= rows; j++) {
    line(0, j * gridSize, width, j * gridSize);
  }
}

function rollDiceAndDraw() {
  let diceRoll = floor(random(1, 7));
  stroke(0);
  strokeWeight(2);
  
  // Calculate the middle of the current grid section
  let centerX = currentX + gridSize / 2;
  let centerY = currentY + gridSize / 2;
  
  switch (diceRoll) {
    case 1:
      // One diagonal line from top-left to bottom-right
      line(currentX, currentY, currentX + gridSize, currentY + gridSize);
      break;
    case 2:
      // Two diagonal lines forming an "X"
      line(currentX, currentY, currentX + gridSize, currentY + gridSize);
      line(currentX + gridSize, currentY, currentX, currentY + gridSize);
      break;
    case 3:
      // Three parallel horizontal lines
      line(currentX, currentY + gridSize / 4, currentX + gridSize, currentY + gridSize / 4);
      line(currentX, currentY + gridSize / 2, currentX + gridSize, currentY + gridSize / 2);
      line(currentX, currentY + 3 * gridSize / 4, currentX + gridSize, currentY + 3 * gridSize / 4);
      break;
    case 4:
      // Four parallel vertical lines
      line(currentX + gridSize / 4, currentY, currentX + gridSize / 4, currentY + gridSize);
      line(currentX + gridSize / 2, currentY, currentX + gridSize / 2, currentY + gridSize);
      line(currentX + 3 * gridSize / 4, currentY, currentX + 3 * gridSize / 4, currentY + gridSize);
      break;
    case 5:
      // Five lines forming a star shape
      line(centerX, currentY, centerX, currentY + gridSize);
      line(currentX, centerY, currentX + gridSize, centerY);
      line(currentX, currentY, currentX + gridSize, currentY + gridSize);
      line(currentX + gridSize, currentY, currentX, currentY + gridSize);
      line(currentX + gridSize / 4, currentY + gridSize / 4, currentX + 3 * gridSize / 4, currentY + 3 * gridSize / 4);
      line(currentX + 3 * gridSize / 4, currentY + gridSize / 4, currentX + gridSize / 4, currentY + 3 * gridSize / 4);
      break;
    case 6:
      // Shape resembling the number 7
      line(currentX, currentY, currentX + gridSize, currentY); // Top horizontal line
      line(currentX + gridSize, currentY, currentX, currentY + gridSize); // Diagonal line
      break;
  }

  // Move to the next section to the right
  currentX += gridSize;

  // If reached the end of the row, move to the next row
  if (currentX >= width) {
    currentX = 0;
    currentY += gridSize;
  }

  // If reached the bottom, stop the drawing
  if (currentY >= height) {
    noLoop();
  } else {
    rollDiceAndDraw(); // Draw the next shape
  }
}