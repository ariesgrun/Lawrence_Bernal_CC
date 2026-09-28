

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
rectMode(CENTER);
  angleMode(DEGREES);
  columns = ceil(width / 100);
  rows = ceil(height / 100);
}

let columns;
let rows;

function draw() {
    fill("#FFFFFF");
//each block is ordered right to left
    push();
    translate(100, 100);
    rect(0, 0, 100, 100)
    stroke(255,0,0)
    noFill();
    arc(-50,50 , 75, 75, 270, 0)
    arc(-50,50 , 125, 125, 270, 0)

    arc(50,-50 , 75, 75, 90, 180)
    arc(50,-50 , 125, 125, 90, 180)
    pop();

//////
    push();
    translate(200, 100);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    arc(-50,0, 25, 25, 270, 90);
    arc(50,0, 25, 25, 90, 270);

    line(-25/2, 50, -25/2, -50)
    line(25/2, 50, 25/2, -50)
    pop();

    // push();
    // translate(100, 200);
    // rect(0, 0, 100, 100);
    // stroke(255,0,0);
    // noFill();
    // arc(-50,0, 25, 25, 270, 90);
    // arc(50,0, 25, 25, 90, 270);

    // line(-25/2, 50, -25/2, -50)
    // line(25/2, 50, 25/2, -50)
    // pop();


    push();
    translate(300, 100);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    arc(-50,0, 25, 25, 270, 90);
    arc(50,0, 25, 25, 90, 270);
    arc(0,-50, 25, 25, 0, 180);
    arc(0,50, 25, 25, 180, 360);
    pop();


    push();
    translate(400, 100);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    
    line(-25/2, 50, -25/2, 25/2);
    line(25/2, 50, 25/2, 25/2);

    line(25/2, -50, 25/2, -25/2);
    line(-25/2, -50, -25/2, -25/2);

    pop();


}
