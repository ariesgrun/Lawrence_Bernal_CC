

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  translate(windowWidth/2, windowHeight/2);
  fill("#ffffff")
  
  //https://p5js.org/reference/p5/arc/
  rect(0,0,100,100)

  fill(255,0,0);
  arc(-50, -50, 100, 100,0,90)
  arc(50,50, 100, 100,180,270)

}
