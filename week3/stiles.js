

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  rectMode(CENTER)
  angleMode(DEGREES)
  noLoop();
}
///https://p5js.org/reference/p5/arc/


function draw() {
translate(50,50);

  for(let i = 0; i<100 ; i++) {
    for (let j = 0; j < 100; j++) {  
      push();
      fill("#ffffff");
      noStroke();
      translate(100*i,100*j);
      rotate(floor(random(0, 100))*90);
      rect(0,0,100,100);
      noFill();
      stroke(255,0,0)
      arc(-50, -50, 100, 100,0,90);
      arc(50,50, 100, 100,180,270);
      pop();
      }
      
    }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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