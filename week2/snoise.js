

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
  background(0);

   if (mouseIsPressed) {
    fill("#c51414")

    currentX = (mouseX) + 35*noise(0.085 * frameCount)  ;
    currentY = (mouseY) + 35*noise(0.085 * frameCount + 1000);
    let size = 50 + 100* noise(0.155 * frameCount)

  }
  else{  
  fill("#17c514")

  let shiftX = noise(0.005 * frameCount+1000);
  let shiftY = noise(0.005 * frameCount);
  // currentX = windowWidth * noise(0.005 * frameCount); //th
  // currentY = windowHeight * noise(0.005 * frameCount + 1000);}
  currentX = currentX + shiftX;
  currentY = currentY + shiftY;

  }
  let size = 50 + 100* noise(0.008 * frameCount)
  circle(currentX, currentY, size);
  
}