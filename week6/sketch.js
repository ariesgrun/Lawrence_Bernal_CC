

function setup() {
  createCanvas(1000, 1000, WEBGL);
  
}
//goal 3d scene with sphere you control to move around
//fixed camera
//move ball to door to change sketch

let ballx = 0;
let ballz = 51;
let ballSize = 50;
let ballSpeed = 5;

function draw() {
  background(0);
  if (keyIsDown('w')) {
    ballz = ballz - ballSpeed;
  }
  if (keyIsDown('s')) {
    ballz = ballz + ballSpeed;
  }
  if (keyIsDown('a')) {
    ballx = ballx - ballSpeed;
  }
  if (keyIsDown('d')) {
    ballx = ballx + ballSpeed;
  }


  push();
  translate(ballx, 0, ballz);
  sphere(ballSize);
  pop(); 




  
}
