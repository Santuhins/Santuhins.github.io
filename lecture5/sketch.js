let img;
let circleX=100;
let circleY=100;
score = 0
// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('./spot.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);

    imageMode(CENTER)
    image(img, mouseX, mouseY, 350, 350);

    noFill();
    circle(circleX, circleY, 50);

    let d;
    d = dist(mouseX, mouseY, circleX, circleY);

    if (d<50) {
        circleX = random(0, width)
        circleY = random(0, height) 
        score = score + 1;
    }
    
    stroke("white");
    text(score, 50, 50,);

    if (score >5) {
        text("hahaha you lost your time",50, 70);
    }

  }