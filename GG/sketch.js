let gridSize = 40;
let roll1
let o
let m
function setup() {
  createCanvas(600, 600);
  drawGridBackground();
}
function drawGridBackground() {
  background(250); // White background
  stroke(200); // Light grey for grid lines
  let cellSize = width / gridSize;
  for (let i = 0; i <= gridSize; i++) {
    line(i * cellSize, 0, i * cellSize, height); // Vertical lines
    line(0, i * cellSize, width, i * cellSize); // Horizontal lines
  }
}

function draw() {
  noLoop();
  dice(10,10,,rool1)
}
o= random(40)
m=random(40)
if(roll1==1)
    {
      line(o+1, m+1, );
    }     