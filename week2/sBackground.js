// https://p5js.org/tutorials/coordinates-and-transformations/
// https://p5js.org/tutorials/custom-geometry/
// https://p5js.org/tutorials/lights-camera-materials/#camera-and-view
// https://p5js.org/reference/p5/p5.Camera/
// https://beta.p5js.org/reference/p5/keyIsDown/


let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  debugMode()

  describe('A red box on a white background.');

  cam = createCamera();
  angleMode(DEGREES)
}

function draw() {
  background(0);
  // "#315329"

    // if (mouseIsPressed) {
    // cam.move(0, 0, -1);
  // }

if (keyIsDown(UP_ARROW)) {
  cam.move(0, 0, -2); // forward
}
else if (keyIsDown(DOWN_ARROW)) {
  cam.move(0, 0, 2); // backward
}
else if (keyIsDown(LEFT_ARROW)) {
  cam.move(-2, 0, 0); // left
}
else if (keyIsDown(RIGHT_ARROW)) {
  cam.move(2, 0, 0); // right
}
orbitControl();

if (cam.eyeY < 0){
  fill(255, 0, 0);
}


else{
  fill(0, 255, 0);
}


box();

for (let i = 0; i < 6; i++) {
  push();
  rotateZ(i*60)
  translate(150, 10, 10);
  sphere(50);
  pop();

}

for (let i = 0; i < 6; i++) {
  push();
  rotateZ(i*60)
  translate(250, 150, 10);
  sphere(50);
  pop();
  
}
push();
translate(spherex, spherey, spehrez);
fill(0,0,255)
sphere(radius, detailX, detailY);

pop();
}

let spherex;
let spherey;
let spehrez;

let nextX;
let nextY;
let nextZ;
