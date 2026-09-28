
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

// truchet reference https://nedbatchelder.com/blog/202208/truchet_images
//goal: recreate Christopher Carlson's tiles

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
      rotate(floor(random(0, 100))*90); //random function has a uniform distribution adding higher range would make it more random i guess?
      rect(0,0,100,100);
      noFill();
      stroke(0,0,0)
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


//////////////////////////////////////////


//square with 2 corner arcs
  // push();
  // fill("#ffffff");
  // noStroke();
  // translate(100*i,100*j);
  // rotate(floor(random(0, 4))*90); 
  // rect(0,0,100,100);
  // noFill();
  // stroke(0,0,0)
  // arc(-50, -50, 100, 100,0,90);
  // arc(50,50, 100, 100,180,270);
  // pop();




// 