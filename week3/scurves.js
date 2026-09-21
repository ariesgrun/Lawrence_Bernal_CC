

function setup() {

  createCanvas(3414/2, 1778/2);
  background("#223843")
  angleMode(DEGREES)
  noLoop();
}
//https://p5js.org/reference/p5/bezier/
//bezier(x1, y1, x2, y2, x3, y3, x4, y4)
//https://p5js.org/reference/p5/resetMatrix/

function draw() { //top right circle
  background("#223843");
  for (let c = 0; c<13; c++){
    noFill();
    stroke("#f0f0f0")
    circle(0, 0, 50*c)
  }
  translate(width/2, height/2);


  noFill(); //green waves
  for (let i = 0; i<35; i++){
    push(); 
    stroke("#4C9A6A")
    translate(-290,0)
    circle(0, 0,20) 
    circle(0, 0,420)
    arc(0, 0, 100, 100, 180, 403)
    rotate(4*i)  
    bezier(0, 0, 580, 550, -250, -200, width, 40);     
    pop();

    push();//purple rings
    stroke("#B370B0")
    translate(-290,0)
    circle(0, 0,550)
    for (let p2 = 0; p2 < 6; p2++) {
      circle(0,-275,30)
      rotate(24*p2)
      
    }
    pop();
    }


  for (let i = 0; i<16; i++){ //yellow curves
    push(); 
    stroke("#E6D9A2")
    translate(-450,-225)
    rotate(2.5*i);
    circle(0, 0,30); 
    bezier(0, 0, -150, -100, 0, 0, -450, 800);     
    pop();
    }


  resetMatrix();


  translate(width/2 +20, height/2);
  stroke("#B370B0")
  for (let p = 0; p<20; p++){//purple lines
  push();
  circle(0,0,10)
  circle(0,0,40)
  rotate(3*p)
  bezier(0,0,0,0,200,-250,-500,-500)
  pop();
  }

  resetMatrix();
  translate(width*0.8, height*0.3)
  stroke("#FB6107")
  circle(0,0,90)
  circle(0,0,45)


  for (let o1 = 0; o1 < 10; o1++) {
    push();
    rotate(3*o1);
    bezier(-300,-300,  -250,150,   0,0,  500,150)
    pop();
    
  }

  translate(-240,100)
  circle(0,0, 100)
  circle(-22,-150, 50)
  stroke("#B370B0")
  circle(-22,-125, 50)
  circle(0,0, 150)

  resetMatrix();
  translate(width*0.9, height*0.1);
  stroke("#E6D9A2")


    for (let o1 = 0; o1 < 10; o1++) {
    push();
    rotate(3*o1);
    bezier(-200,-200,  -25*o1,40*o1,   0,0,  500,100)
    pop();
    
  }
  circle(0,200,25);
  circle(0,200,50);
  circle(-265,0,125);
  stroke("#FB6107")
  circle(-265,0,75);

}

