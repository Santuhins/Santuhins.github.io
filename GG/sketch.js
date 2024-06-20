let gridSize = 50;
function setup() {
  createCanvas(500, 500);
  drawGridBackground();
}
function drawGridBackground() {
  background(255); // White background
  stroke(200); // Light grey for grid lines
  let cellSize = width / gridSize;
  for (let i = 0; i <= gridSize; i++) {
    line(i * cellSize, 0, i * cellSize, height); // Vertical lines
    line(0, i * cellSize, width, i * cellSize); // Horizontal lines
  }
}

function draw() {
  noLoop();
}
