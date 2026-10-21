//Goal: make a grid of white squares turn black over time
// rate of changing color = random
//which squares get to change = random


//2d arrays are arrays in arrays




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
    rectMode(CENTER);
  angleMode(DEGREES);

}

let columns;
let rows;


function draw() {
    columns = ceil(width / 50);
    rows = ceil(height / 50);
    translate(25,25);

    for(let i = 0; i < columns ; i++) {
        for (let j = 0; j < rows; j++) {
            push();
            translate(50*i, 50*j) 
            rect(0, 0, 50, 50);
            pop();
        }
    }
}