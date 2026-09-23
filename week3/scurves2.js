

function setup() {

  createCanvas(2560, 1440);
  background("#223843");
}

function draw() {
  translate(width/2, height/2);

  stroke("#4C9A6A");

  noStroke();
  circle(0, 0, 10);

  stroke("#4C9A6A");

  //translate(250,250)
  noFill();
  bezier(0, 0, 300, -100, 920, 800, 550, 550)

}
