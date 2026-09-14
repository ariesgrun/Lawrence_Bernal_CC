

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)

  translate(windowWidth/2, windowHeight/2)
  circle(0, 0, 10)
  
}
//line(x1, y1, x2, y2)
//goal - Draw a continous line that randomly chooses next position 

let currentX= 0// windowWidth/2;
let currentY= 0//windowHeight/2;
let nextX = 0;
let nextY = 0;

function draw() {

  nextY = currentY + random(-25, 25);
  nextX = currentX + random(-25, 25);

  line(currentX, currentY, nextX, nextY);
  currentX = nextX;
  currentY = nextY;
  
}
