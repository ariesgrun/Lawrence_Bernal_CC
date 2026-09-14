

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  currentX= windowWidth/2;
  currentY= windowHeight/2;
  frameRate(24);
}
//line(x1, y1, x2, y2)
//goal - Draw a continous line that randomly chooses next position 
let nextX;
let nextY;
let currentX;
let currentY;

function draw() {

  if (mouseIsPressed) {
    nextY = mouseY;
    nextX = mouseX; 
  }
  else{
    nextY = currentY + random(-12, 12);
    nextX = currentX + random(-12, 12);
  }

  if (nextX > windowWidth) {
    nextX = windowWidth;
  }
  else if (nextX < 0 ) {
    nextX = 0;
  }

  if (nextY > windowHeight) {
    nextY = windowHeight;
  }
  else if (nextY < 0 ) {
    nextY = 0;
  }
  let r = map(currentX, 0, windowWidth, 0, 255);
  let g = map(currentY, 0, windowHeight, 0, 255);
  // stroke(random(0,255), random(0,255), random(0,255))
  stroke(r , g , 100);
  line(currentX, currentY, nextX, nextY);
  currentX = nextX;
  currentY = nextY;

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}