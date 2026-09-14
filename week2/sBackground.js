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

}

function draw() {
  background(0);
  // "#315329"
  fill(255, 0, 0);
  box();

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



}