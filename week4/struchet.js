
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FFFFFF");
  rectMode(CENTER);
  angleMode(DEGREES);
columns = ceil(width / 100);
rows = ceil(height / 100);
}
//https://p5js.org/reference/p5/noLoop/
///https://p5js.org/reference/p5/arc/
//https://p5js.org/reference/p5/redraw/

// truchet reference https://nedbatchelder.com/blog/202208/truchet_images
//goal: recreate Christopher Carlson's tiles

let columns;
let rows;


function draw() {
columns = ceil(width / 100);
rows = ceil(height / 100);
background("#FFFFFF");
fill("#FFFFFF");
noStroke();//

translate(50,50);

  for(let i = 0; i < columns ; i++) {
    for (let j = 0; j < rows; j++) {  
        let randomtile = floor(random(1, 8));
        switch (randomtile) { //switch cases are cleaner else if statements
          case 1:
            twocurves(i, j);
            break;
          case 2:
            line2dots(i, j);
            break;
          case 3:
            circs4(i, j);
            break;
          case 4:
            crossT(i, j);
            break;
          case 5:
            frown(i, j);
            break;
          case 6:
            THead(i, j);
            break;   
          case 7:
            Diamond4(i,j);
            break;     
        }
      }
      
    }

    noLoop();
  }





//////////////////////////////////////////
//tiles

function twocurves(i,j){
  push();
    translate(100*i,100*j);
    rotate(floor(random(1, 5))*90);

    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    arc(-50,50 , 75, 75, 270, 0);
    arc(-50,50 , 125, 125, 270, 0);

    arc(50,-50 , 75, 75, 90, 180);
    arc(50,-50 , 125, 125, 90, 180);
  pop();
}



function line2dots(i,j){
  push();
    translate(100*i,100*j);
    rotate(floor(random(1, 5))*90);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    arc(-50,0, 25, 25, 270, 90);
    arc(50,0, 25, 25, 90, 270);

    line(-25/2, 50, -25/2, -50);
    line(25/2, 50, 25/2, -50);
  pop();
}


function circs4(i,j){
  push();
    translate(100*i,100*j);
    rotate(floor(random(1, 5))*90);

    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    arc(-50,0, 25, 25, 270, 90);
    arc(50,0, 25, 25, 90, 270);
    arc(0,-50, 25, 25, 0, 180);
    arc(0,50, 25, 25, 180, 360);
  pop();
}


function crossT(i,j){
push();
  translate(100*i,100*j);
  rotate(floor(random(1, 5))*90);

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
}


function frown(i,j){
push();
  translate(100*i,100*j);
  rotate(floor(random(1, 5))*90);

  rect(0, 0, 100, 100);
  stroke(255,0,0);
  noFill();


  arc(50,-50 , 75, 75, 90, 180);
  arc(50,-50 , 125, 125, 90, 180);

  arc(-50,0, 25, 25, 270, 90);
  arc(0,50, 25, 25, 180, 360);
pop();
}

function THead(i,j){
  push();
    translate(100*i,100*j);
    rotate(floor(random(1, 5))*90);
  
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
}

function Diamond4(i,j){
  push();
    translate(100*i,100*j);
    rotate(floor(random(1, 5))*90);
    rect(0, 0, 100, 100);
    stroke(255,0,0);
    noFill();
    arc(-50,50, 75, 75, 270, 0);
    arc(50,50, 75, 75, 180, 270);
    arc(50,-50, 75, 75, 90, 180);
    arc(-50,-50, 75, 75, 0, 90);
  pop();
}




///

  // for(let i = 0; i < columns ; i++) {
  //   for (let j = 0; j < rows; j++) {  
  //     push();
  //     fill("#ffffff");
  //     noStroke();
  //     translate(100*i,100*j);
  //     rotate(floor(random(0, 100))*90); //random function has a uniform distribution adding higher range would make it more random i guess?
  //     rect(0,0,100,100);
  //     noFill();
  //     stroke(0,0,0)
  //     arc(-50, -50, 100, 100,0,90);
  //     arc(50,50, 100, 100,180,270);
  //     pop();
  //     }
      
  //   }


  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw()
}

function mousePressed() {
  redraw();                 // run draw() once, which re-rolls every tile
}