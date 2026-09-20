

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#223843")
  angleMode(DEGREES)
  
}
let r = 0; 

function draw() {
translate(width/2, height/2);

for (let i = 1; i < 11; i++) {
  push();
  noFill();
  stroke("#EFF1F3")
  circle(0, 0, 100*i)
  pop();
  

  push();
  //triangle(x1, y1, x2, y2, x3, y3)
  noFill();
  stroke("#EAD637");

  rotate(r* 10* i);
  stroke("#5E0B15");
  line(0, 0, 50*i, 0);
  stroke("#EAD637");
  translate(50*i, 0);
  rotate(r * 5)
  triangle(-8, -10, 8, -10, 0, 10);
  pop();
  }
  r++
  if (r>360) {
    //https://p5js.org/reference/p5/noLoop/
    noLoop();
    
  }

}
