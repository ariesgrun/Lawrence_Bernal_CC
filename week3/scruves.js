

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  
}
//https://p5js.org/reference/p5/bezier/
//bezier(x1, y1, x2, y2, x3, y3, x4, y4)



function draw() {
  translate(windowWidth/2, windowHeight/2)
  bezier(x1, y1, x2, y2, x3, y3, x4, y4)
}
