//Goal: make a grid of white squares turn black over time
// rate of changing color = random
//which squares get to change = random

//2d arrays are arrays in arrays


//objects reference https://www.youtube.com/watch?v=-e5h4IGKZRY

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
    columns = ceil(width / 50);
    rows = ceil(height / 50);

    for(let i = 0; i < columns ; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            grid [i][j] = {//each is object with values
                fadeState: false,
                brightness : 255,
                rate: random(1, 5)};
            }
        }

}

let columns;
let rows;
let grid = [];
let totalSqauares =0;
function draw() {
totalSqauares =0
    if (random(0,100)<5) {
        let i = floor(random(columns));
        let j = floor(random(rows));
        grid[i][j].fadeState = true;
    }

    for(let i = 0; i < columns ; i++) {
        for (let j = 0; j < rows; j++) {
            let gridPosition = grid[i][j];
            if (gridPosition.fadeState == true){
                gridPosition.brightness = max(0,gridPosition.brightness - gridPosition.rate)
            }
            if (gridPosition.brightness ==0){
                totalSqauares++;
            }
            push();
            stroke(255,0,0)
            fill(gridPosition.brightness)
            translate(50*i , 50*j) 
            rect(0, 0, 50, 50);
            pop();
            }
    }

    if (totalSqauares== columns*rows){
        for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].brightness = 255;
            grid[i][j].fadeState = false;
            grid[i][j].rate = random(1, 5);

    }
    }
}
}