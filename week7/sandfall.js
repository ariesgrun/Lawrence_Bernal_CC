

function setup() {
  createCanvas(1000, 1000);
  columns = ceil(width / 10);
    rows = ceil(height / 10);
  for(let i = 0; i < columns ; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            grid [i][j] = {//each is object with values
                Sandbelow: false,
                color : 255,
                fallState: false
            };
        }
    }


}

let columns;
let rows;
let grid = [];
let totalSqauares = 0;

function draw() {
    // let gridPosition = grid[i][j];
    background(0)
    totalSqauares = 0;
    //spawn logic
  if (random(0,100)<100) {//spawn at the top
        let i = floor(random(columns));
        if ( grid[i][0].fallState == false) {
            grid[i][0].fallState = true; //first row will spawn sand
            grid[i][0].color = random(100, 255) //arbitrary/placeholder
        }

    }

    for (let i = 0; i < columns; i++) { //
        for (let j = rows - 1; j >= 0; j--) { // check bottom to top for sand below staate
            let gridPosition = grid[i][j];
            if (j == rows - 1) {
                gridPosition.Sandbelow = true;
            } else {
                gridPosition.Sandbelow = grid[i][j + 1].fallState;
            }
        ///check if sand can fall then make it fall
        if (gridPosition.fallState == true && gridPosition.Sandbelow == false) {
        grid[i][j + 1].fallState = true;
        grid[i][j + 1].color = gridPosition.color;
        gridPosition.fallState = false;
            }
        }
    }
    //draw the sand
    for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j].fallState == true) {
        fill(grid[i][j].color);
        rect(10*i, 10*j, 10, 10);
        totalSqauares++;
      }
    }
  }

  ///reset when full
  if (totalSqauares == columns * rows) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].fallState = false;
        grid[i][j].Sandbelow = false;
        grid[i][j].color = 255;
      }
    }
  }
}

function keyPressed() {
  if (key === 'g') {
    saveGif('sand', 60); // saves sand.gif, 5 seconds long
  }
}