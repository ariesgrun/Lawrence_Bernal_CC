
//Branching lines
//line(x1, y1, x2, y2)
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  translate(windowWidth/2, windowHeight/1.25);
  circle(0, 0, 10);
  stroke("#FFFFFF")
 
}




function draw() {
  
}

//goal 
// when mouse click generate a branch
//maybe additional clicks creates mutiple branches
//prob have to use arrays to store branching positions



let startx= random(-50, 50)
let starty= random(-50, -100)

let branchx = startx + random(-50, 50)
let branchy = starty - random(-50, -100)

function mousePressed() {
  translate(windowWidth/2, windowHeight/1.25);
  line(0,0,0,-50)
  
  for (let i = 0; i < 6; i ++) {
    
    line(0, 0, random(-50, 50), random(-50, -100));
  }
}
