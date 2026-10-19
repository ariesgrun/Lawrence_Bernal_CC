let pMapper;
let quadMap;
let squaresBuf; 



let quadMap2;
let linesBuf;


let nextX;
let nextY;
let currentX = 400/2;
let currentY = 400/2;



async function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pMapper = createProjectionMapper(this);

  quadMap = pMapper.createQuadMap(400, 400, 20, 20);
  squaresBuf = createGraphics(400, 400);
  squaresBuf.background(200, 200, 0);


  quadMap2 = pMapper.createQuadMap(400, 400, 20, 20);
  linesBuf = createGraphics(400, 400);
  linesBuf.background(0);



  // pMapper.load("maps/map.json");
}

function draw() {
  background(0);

  squares(squaresBuf);
  quadMap.displayTexture(squaresBuf);



  wanderlines(linesBuf);
  quadMap2.displayTexture(linesBuf);
  
}


function squares(pg) {
  pg.push();
  pg.background(255, 100, 100, 10);
  pg.noStroke();
  pg.fill(0, 100, 200);
  pg.rect(random(pg.width), random(pg.height), 100);
  pg.pop();
}


function wanderlines(pg) {
  pg.push();
    if (mouseIsPressed) {
    nextY = mouseY;
    nextX = mouseX; 
  }
  else{
    nextY = currentY + pg.random(-12, 12);
    nextX = currentX + pg.random(-12, 12);
  }

  if (nextX > 400) {
    nextX = 400;
  }
  else if (nextX < 0 ) {
    nextX = 0;
  }

  if (nextY > 400) {
    nextY = 400;
  }
  else if (nextY < 0 ) {
    nextY = 0;
  }
  let r = map(currentX, 0, width, 0, 255);
  let g = map(currentY, 0, height, 0, 255);
  // stroke(random(0,255), random(0,255), random(0,255))
  pg.stroke(r , g , 100);
  pg.line(currentX, currentY, nextX, nextY);
  currentX = nextX;
  currentY = nextY;

  pg.pop();


}




function keyPressed() {
  if (key === "c") pMapper.toggleCalibration();
  if (key === "s") pMapper.save("map.json");
  if (key === "l") pMapper.load("maps/map.json");
  if (key === "f") fullscreen(!fullscreen());
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}