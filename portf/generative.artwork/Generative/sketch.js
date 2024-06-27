let x=200
let m

function setup() {
 createCanvas(windowWidth, windowHeight);
  background(250, 250);
  frameRate(10) //atrums
}

function draw() {
  m=random(800)
 // line(x,0,x,400) // otrais ir sakuma punkts pa y
    
  stroke(0,25)
    line(random(windowWidth/4),0,random(windowWidth/4),10000) // otrais ir sakuma punkts pa y
  
  line(2000,m,m,0)
  line(200,950,random(3500),200)
   
  line (900,random(windowWidth),random(windowWidth),windowHeight)
  
  noFill()
  circle(windowWidth/2,200,random(900-600))
  
  circle(random(windowWidth/2),random(150),200)
  
  circle(random(2000),500,200)

}
function keyPressed() {
    if (key === ' ') {
      saveCanvas('myArtwork', 'png');
    }
}