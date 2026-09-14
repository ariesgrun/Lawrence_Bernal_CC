
//Branching lines
//line(x1, y1, x2, y2)
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  translate(windowWidth/2, windowHeight/1.25);
  circle(0, 0, 10);
  stroke("#FFFFFF")
  line(0,0,100,200)
}




function draw() {
  
}

//goal 
// when mouse click generate a branch
//maybe additional clicks creates mutiple branches




// let randx =
// let randy =

function mousePressed() {
  translate(windowWidth/2, windowHeight/1.25);
  
  for (let i = 0; i < 6; i ++) {
    
    line(0, 0, random(-50, 50), random(-50, -100));
  }
}