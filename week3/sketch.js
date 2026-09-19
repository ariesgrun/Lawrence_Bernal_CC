

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)
}

//https://p5js.org/reference/p5/ceil/
let cols = ceil(width / rectSize);
let rows = ceil(height / rectSize);



function draw() {

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill("#FFFFFF");
      rect(i * 50, j * 50, 50, 50);
    }
  }
}
