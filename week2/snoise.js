

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(30)
  currentX = windowWidth / 2;
  currentY = windowHeight / 2;
}
//https://p5js.org/reference/p5/noise/
//always returns values between 0 and 1

let currentX;
let currentY;

function draw() {
  stroke("#FFFFFF")

  currentX = windowWidth * noise(0.005 * frameCount);
  currentY = windowHeight * noise(0.005 * frameCount + 1000);
  circle(currentX, currentY, 100);

}