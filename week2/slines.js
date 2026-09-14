

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  currentX= windowWidth/2;
  currentY= windowHeight/2;
  frameRate(24)
}
//line(x1, y1, x2, y2)
//goal - Draw a continous line that randomly chooses next position 
let nextX;
let nextY;
let currentX;
let currentY;

function draw() {
  stroke("#FFFFFF")

  if (mouseIsPressed) {
    nextY = mouseY;
    nextX = mouseX; 
  }
  else{
    nextY = currentY + random(-12, 12);
    nextX = currentX + random(-12, 12);
  }

  line(currentX, currentY, nextX, nextY);
  currentX = nextX;
  currentY = nextY;
  

  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}