

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(30)
  currentX = windowWidth / 2;
  currentY = windowHeight / 2;
}
//https://p5js.org/reference/p5/noise/
//always returns values between 0 and 1
//currentX = windowWidth * noise(0.005 * frameCount +1000)
  //windowidth = max value of range
  //0.005 spacing between incerements 
  //1000 offest to obtain new range of values


let currentX;
let currentY;


function draw() {
  stroke("#d81b1b")
  background(0);

   if (mouseIsPressed) {

    currentX = (mouseX) + 100*noise(0.005 * frameCount)  ;
    currentY = (mouseY) + 100*noise(0.005 * frameCount + 1000);
  }
  else{  
  currentX = windowWidth * noise(0.005 * frameCount);
  currentY = windowHeight * noise(0.005 * frameCount + 1000);}

  circle(currentX, currentY, 100);

  
}