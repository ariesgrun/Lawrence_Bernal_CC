

function setup() {
  createCanvas(windowWidth, windowHeight);
  columns = ceil(width / 10);
    rows = ceil(height / 10);
  for(let i = 0; i < columns ; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            grid [i][j] = {//each is object with values
                Sandbelow: false,
                color : 255,
            };
        }
}
}

let columns;
let rows;
let grid = [];
let totalSqauares = 0;


function draw() {
  if (random(0,100)<90) {
        let i = floor(random(columns));
        grid[i].fadeState = true;
    }
}
