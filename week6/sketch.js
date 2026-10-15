//goal 3d scene with sphere you control to move around
//fixed camera
//move ball to door to change sketch

//https://www.w3schools.com/JS/js_array_methods.asp
//https://p5js.org/reference/p5/p5.Camera/
//https://www.youtube.com/watch?v=BW3D9WwalQE


function setup() {
  createCanvas(1000, 800, WEBGL);
  angleMode(DEGREES)

  for (let i = 0; i < 6; i++) {
      pillarx.push(random(-450, 450));
      pillarz.push(random(-450, 450));
      pillarHeight.push(random(20,400))
      pillarActive.push(false)
    }
}
  let pillarx = [];
  let pillarz = [];
  let pillarHeight = [];
  let pillarActive = [];

  let activePillar = 0;
  let activeDoor = false;
let ballx = 0;
let ballz = 250;
let ballSize = 50;
let ballSpeed = 5;


let cam;


/////////////////////////////////

function draw() {
orbitControl();
// debugMode();


background(0);
if (keyIsDown('w')) {
  ballz = ballz - ballSpeed;
}
if (keyIsDown('s')) {
  ballz = ballz + ballSpeed;
}
if (keyIsDown('a')) {
  ballx = ballx - ballSpeed;
}
if (keyIsDown('d')) {
  ballx = ballx + ballSpeed;
}


//moving ball
push();
translate(ballx, 0, ballz);
sphere(ballSize);
pop(); 


//floor
push();
translate(0, 50, 0)
rotateX(90)
plane(1000)
pop();

//backwall
push();
translate(0,-450,-500)
plane(1000)
pop();

//right wall
push();
rotateY(90)
translate(0,-450  ,500)
plane(1000)
pop();

//left wall
push();
rotateY(90)
translate(0,-450  ,-500)
plane(1000)
pop();

//only have ball within boundaries

if (ballx > 450) {
  ballx = 450;
  
}
if (ballx < -450) {
  ballx = -450;
}
if (ballz > 450) {
  ballz = 450;
  
}
if (ballz < -450) {
  ballz = -450;
  
}


//pillars

///check if pillar is touched
for (let i = 0; i < pillarx.length; i++) {
  if (pillarActive[i] == false && dist(ballx, ballz, pillarx[i], pillarz[i]) < 50) {
    pillarActive[i] = true;
    activePillar++;
  }
}


for (let index = 0; index < pillarx.length; index++) {
  push();
  if (pillarActive[index]) {//if pillar touched turn green
    fill(0,255,0)
  }
  else{fill(255,0,0)}//if pillar not touched turn red

  translate(pillarx[index], 0, pillarz[index])
  box(60, pillarHeight[index], 60);
  pop();
  
}
//door

push();
if (activePillar == pillarx.length) {
  fill(0,255,0);
  activeDoor = true;
}
else{fill(255,0,0)}

translate(0,-100,-480);
box(150, 350, 20);
pop();

if (activeDoor && dist(ballx, ballz, 0, -480) <50 ) {
  // box(10,1000,10) spawn box if conditions met
  window.location.href = "sketch2.html";
}
  
}

