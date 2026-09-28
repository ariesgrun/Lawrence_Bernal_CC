

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
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
//// 1. twocurves
    push();
    translate(100, 100);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    arc(-50,50 , 75, 75, 270, 0);
    arc(-50,50 , 125, 125, 270, 0);

    arc(50,-50 , 75, 75, 90, 180);
    arc(50,-50 , 125, 125, 90, 180);
    pop();

//////2. line2dots
    push();
    translate(200, 100);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    arc(-50,0, 25, 25, 270, 90);
    arc(50,0, 25, 25, 90, 270);

    line(-25/2, 50, -25/2, -50);
    line(25/2, 50, 25/2, -50);
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

////3. 4circs
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

////////4. cross
    push();
    translate(400, 100);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    
    line(-25/2, 50, -25/2, 25/2);
    line(25/2, 50, 25/2, 25/2);

    line(25/2, -50, 25/2, -25/2);
    line(-25/2, -50, -25/2, -25/2);

    line(-50, -25/2, -25/2, -25/2);
    line(-50, 25/2, -25/2, 25/2);

    line(50, 25/2, 25/2, 25/2);
    line(50, -25/2, 25/2, -25/2);
    pop();
///////5. frown
    push();
    translate(500, 100);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();


    arc(50,-50 , 75, 75, 90, 180);
    arc(50,-50 , 125, 125, 90, 180);

    arc(-50,0, 25, 25, 270, 90);
    arc(0,50, 25, 25, 180, 360);

    pop();

////6. T-head
    push();
    translate(100, 200);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    
    line(-25/2, 50, -25/2, 25/2);
    line(25/2, 50, 25/2, 25/2);

    arc(0,-50, 25, 25, 0, 180);

    line(-50, -25/2, 50, -25/2);
    line(-50, 25/2, -25/2, 25/2);

    line(50, 25/2, 25/2, 25/2);

    pop();


/////7.
    push();
    translate(200, 200);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    

    arc(-50,50, 75, 75, 270, 0);
    arc(50,50, 75, 75, 180, 270);

    arc(50,-50, 75, 75, 90, 180);
    arc(-50,-50, 75, 75, 0, 90);
    pop();



}
