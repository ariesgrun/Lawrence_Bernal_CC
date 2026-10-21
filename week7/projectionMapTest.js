
///////REFERENCE///////////////////////
let pMapper;
let quadMap;
let squaresBuf; 
//////////////////////////

//MY FADING GRID VARS
let quadMap2;
let GridBuf;
let columns;
let rows;
let grid = [];
let totalSqauares = 0;
//////////////////////////////////////////////////////////////////////



async function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pMapper = createProjectionMapper(this);

  quadMap = pMapper.createQuadMap(400, 400, 20, 20);
  squaresBuf = createGraphics(400, 400);
  squaresBuf.background(200, 200, 0);






/////////////////GRID///////////////////////////////////
  quadMap2 = pMapper.createQuadMap(400, 400, 20, 20);
  GridBuf = createGraphics(1200, 1200);
  GridBuf.background(0);

  columns = ceil(GridBuf.width / 50);
  rows = ceil(GridBuf.height / 50);

  for (let i = 0; i < columns; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = { // each is object with values
        fadeState: false,
        brightness: 255,
        rate: random(1, 5)};
        }
    }
/////////////////////////////////




  // pMapper.load("maps/map.json");
}

function draw() {
  background(0);

  squares(squaresBuf);
  quadMap.displayTexture(squaresBuf);


//////////GRID////////////////////////////
  fadingGrid(GridBuf);
  quadMap2.displayTexture(GridBuf);
  //////////////////////////////////
}


function squares(pg) {
  pg.push();
  pg.background(255, 100, 100, 10);
  pg.noStroke();
  pg.fill(0, 100, 200);
  pg.rect(random(pg.width), random(pg.height), 100);
  pg.pop();
}


function fadingGrid(pg) {
  totalSqauares = 0;

  if (random(0, 100) < 5) {
    let i = floor(random(columns));
    let j = floor(random(rows));
    grid[i][j].fadeState = true;
  }

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let gridPosition = grid[i][j];
      if (gridPosition.fadeState == true) {
        gridPosition.brightness = max(0, gridPosition.brightness - gridPosition.rate);
      }
      if (gridPosition.brightness == 0) {
        totalSqauares++;
      }
      pg.push();
      pg.stroke(255, 0, 0);
      pg.fill(gridPosition.brightness);
      pg.translate(50 * i, 50 * j);
      pg.rect(0, 0, 50, 50);
      pg.pop();
    }
  }

  if (totalSqauares == columns * rows) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].brightness = 255;
        grid[i][j].fadeState = false;
        grid[i][j].rate = random(1, 5);
      }
    }
  }
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