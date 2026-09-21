

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#223843")
  angleMode(DEGREES)
  
}
//https://p5js.org/reference/p5/bezier/
//bezier(x1, y1, x2, y2, x3, y3, x4, y4)
//https://p5js.org/reference/p5/resetMatrix/


let r = 0;
let r1;
let r2;
let r3;

function draw() {
  for (let c = 0; c<13; c++){
    noFill();
    stroke("#f0f0f0")
    circle(0, 0, 50*c)
  }
  translate(windowWidth/2, windowHeight/2);


  noFill();
  for (let i = 0; i<35; i++){
    push(); 
    stroke("#4C9A6A")
    translate(-290,0)
    circle(0, 0,20) 
    rotate(4*i)  
    bezier(0, 0, 580, 550, -250, -200, windowWidth, 40);     
    pop();
    }

  for (let i = 0; i<35; i++){
    push(); 
    resetMatrix();
    stroke("#E6D9A2")
    translate(width*0.2,350)
    circle(0, 0,20) 
    bezier(0, 0, -150, -100, 0, 0, -450, 200);     
    pop();
    }


  resetMatrix();
  translate(width,160)


  // for (let v = 0; v < 24; v++) {
  //   push();
  //   stroke("#A41623")
  //   bezier(-100,0,03,50,60,0777)

  //   circle(0,0,500)
  //   pop();
  // }

}



  // for (let i = 0; i < 6; i++) {
  // rotate(60)
  // bezier(0, 0, 100, 100, -200, -200, 400, 40);}