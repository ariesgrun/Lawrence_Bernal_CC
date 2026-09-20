

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}

//https://p5js.org/reference/p5/ceil/
let cols;
let rows;

let rectSize = random(10,50);

function draw() {
  rows = ceil(windowHeight / rectSize);
  cols = ceil(windowWidth / rectSize);
  rectSize = random(10,50);

  for (let i = 0; i < rows; i++) {
    rect(i*rows,20,20,20);
    
}
