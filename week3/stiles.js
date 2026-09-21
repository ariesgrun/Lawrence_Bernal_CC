

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  columns = ceil(width / 100);
  rows = ceil(height / 100);
}
//https://p5js.org/reference/p5/noLoop/
///https://p5js.org/reference/p5/arc/
//https://p5js.org/reference/p5/redraw/

let columns;
let rows;


function draw() {
columns = ceil(width / 100);
rows = ceil(height / 100);
translate(50,50);

  for(let i = 0; i < columns ; i++) {
    for (let j = 0; j < rows; j++) {  
      push();
      fill("#ffffff");
      noStroke();
      translate(100*i,100*j);
      rotate(floor(random(0, 100))*90); //random function has a uniform distribution
      rect(0,0,100,100);
      noFill();
      stroke(255,0,0)
      arc(-50, -50, 100, 100,0,90);
      arc(50,50, 100, 100,180,270);
      pop();
      }
      
    }
    noLoop();
    
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  redraw();                 // run draw() once, which re-rolls every tile
}



//  push();
//   fill("#ffffff");
//   noStroke();
//   translate(100*i,0);
//   rotate(floor(random(0, 100))*90);
//   rect(0,0,100,100);
//   fill(255,0,0);
//   arc(-50, -50, 100, 100,0,90);
//   arc(50,50, 100, 100,180,270);
//   pop();
//   }