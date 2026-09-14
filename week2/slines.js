


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  let currentX= windowWidth/2;
  let currentY= windowHeight/2;
  circle(0, 0, 10)
}
//line(x1, y1, x2, y2)
//goal - Draw a continous line that randomly chooses next position 
let nextX = 0;
let nextY = 0;
  

function draw() {
  stroke("#FFFFFF")
 
  nextY = currentY + random(-12, 12);
  nextX = currentX + random(-12, 12);

  line(currentX, currentY, nextX, nextY);
  currentX = nextX;
  currentY = nextY;
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}