

function setup() {
  pixelDensity(1)
  createCanvas(2560, 1440);
  background("#223843");
}
let r = 0;
function draw() {
  translate(width/2, height/2);

  stroke("#4C9A6A");

  stroke("#4C9A6A");

  //translate(250,250)
  noFill();

  translate(200,0)
  for (let i = 0; i<144; i++){
    
    push();
    // translate(100, 0)
    rotate(2*i)
    translate(100, 0)
    bezier(0+(2*i), 0, 300+(2*i), -100, -720, 800, 450, 450)
    pop();


  }

  for (let v = 0; v < 24; v++) {
    push();
    rotate(12)
    stroke("#A41623")
    bezier(-10,0,3,50,0,127)
  }

  resetMatrix();
  stroke("#E6D9A2");
  translate(250,500)
  circle(0, 0, 12)

  for (let v1 = 0; v1 < 24; v1++) {
    translate(10, 0)
    push();
    rotate(90)
    bezier(0,0 ,-75,235 ,75,200 ,0,400)
    pop();
  }
  r++;
}