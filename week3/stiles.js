

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)
}

function draw() {
  translate(windowWidth/2, windowHeight/2);
  fill("#ffffff")
  
  //https://p5js.org/reference/p5/arc/
  rect(0,0,100,100)

  fill(255,0,0);
  arc(0, 0, 100, 100,0,HALF_PI)

}
