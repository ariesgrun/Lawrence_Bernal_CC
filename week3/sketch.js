

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#223843")
  angleMode(DEGREES)

}

function draw() {
translate(width/2, height/2);

for (let i = 0; i < 10; i++) {
  push();
  noFill();
  stroke("#EFF1F3")
  circle(0, 0, 100*i)
  pop();
  }
  
}
