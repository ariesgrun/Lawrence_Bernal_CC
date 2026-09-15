// https://p5js.org/tutorials/coordinates-and-transformations/
// https://p5js.org/tutorials/custom-geometry/
// https://p5js.org/tutorials/lights-camera-materials/#camera-and-view
// https://p5js.org/reference/p5/p5.Camera/
// https://beta.p5js.org/reference/p5/keyIsDown/
let spherex = 0;
let spherey =0 ;
let spherez = 0;

let nextX;
let nextY;
let nextZ;

let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  // debugMode()

  describe('A red box on a white background.');

  cam = createCamera();
  angleMode(DEGREES)

  frameRate(24);
}

function draw() {
  background(0);
  // "#315329"

    // if (mouseIsPressed) {
    // cam.move(0, 0, -1);
  // }

if (keyIsDown(UP_ARROW)) {
  cam.move(0, 0, -10); // forward
}
else if (keyIsDown(DOWN_ARROW)) {
  cam.move(0, 0, 10); // backward
}
else if (keyIsDown(LEFT_ARROW)) {
  cam.move(-10, 0, 0); // left
}
else if (keyIsDown(RIGHT_ARROW)) {
  cam.move(10, 0, 0); // right
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

// nextX = random(-12, 12);
// nextY =random(-12, 12);
// nextZ =random(-12, 12);

// spherex = spherex + nextX;
// spherey = spherey + nextY;
// spherez = spherez + nextZ;

//RANDOM MOVEMENT ^^


let nextX = (noise(0.045 * frameCount) - 0.5) * 10;
let nextY = (noise(0.045 * frameCount + 1000) - 0.5) * 10;
let nextZ = (noise(0.045 * frameCount + 2000) - 0.5) * 10;


spherex = spherex + nextX;
spherey = spherey + nextY;
spherez = spherez + nextZ;



push();
translate(spherex, spherey, spherez);
fill(0,0,255);
sphere(20);
pop();

push();
translate(random(-200,200), random(-200,200), random(-200,200));
fill(0,0,255);
sphere(20);
pop();

}


