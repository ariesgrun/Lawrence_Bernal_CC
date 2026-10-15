

function setup() {
  createCanvas(1000, 1000, WEBGL);
  angleMode(DEGREES)
  
}
//goal 3d scene with sphere you control to move around
//fixed camera
//move ball to door to change sketch


//https://p5js.org/reference/p5/p5.Camera/

let ballx = 0;
let ballz = 51;
let ballSize = 50;
let ballSpeed = 5;



let cam;

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

//moving ball
  push();
  translate(ballx, 0, ballz);
  sphere(ballSize);
  pop(); 


//floor
push();
translate(0, 50, 0)
rotateX(90)
plane(1000)
pop();

orbitControl();


  
}
