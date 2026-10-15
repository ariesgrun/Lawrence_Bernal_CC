//goal: 2d version of the original

async function setup() {
  createCanvas(1000, 800);
  imageMode(CENTER);
  rectMode(CENTER);
  frameRate(24)
  noStroke()

  for (let i = 1; i <= 24; i++) {
    frames[i - 1] = await loadImage("earthR/" + i + ".png");
  }

  for (let i = 0; i < 6; i++) {
    pillarx.push(random(-400, 400));
    pillarz.push(random(-350, 150));
    pillarActive.push(false);
  }
}

let frames = [];
let counter = 0;
let spinSpeed = 0.3;

let pillarx = [];
let pillarz = [];
let pillarActive = [];

let activePillar = 0;
let activeDoor = false;

let ballx = 0;
let ballz = 250;
let ballSize = 100;
let ballSpeed = 7;

function draw() {
  background(255);
  translate(width / 2, height / 2);

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



 
  if (ballx > 400) {
    ballx = 400;
  }
  if (ballx < -400) {
    ballx = -400;
  }
  if (ballz > 370) {
    ballz = 370;
  }
if (ballz < -350) {
    ballz = -350;
  }   

    //pillar active check
  for (let i = 0; i < pillarx.length; i++) {
    if (pillarActive[i] == false && dist(ballx, ballz, pillarx[i], pillarz[i]) < 50) {
      pillarActive[i] = true;
      activePillar++;
    }
  }
//check if all pillar active
  if (activePillar == pillarx.length) {
    activeDoor = true;
  }

  //ball enters door
 if (activeDoor && dist(ballx, ballz, 0, -375) < 50) {
    window.location.href = "index.html"; 
  }
//door
  if (activeDoor) {
    fill(0, 100, 0);
  } else {
    fill(175, 0, 0);
  }
  rect(0, -375, 150, 20);

 //pillars
  for (let i = 0; i < pillarx.length; i++) {
    if (pillarActive[i]) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    rect(pillarx[i], pillarz[i], 60, 60);
  }

 //frames
  let currentFrame = floor(counter) % frames.length;
  image(frames[currentFrame], ballx, ballz, ballSize, ballSize);




if (keyIsDown(LEFT_ARROW)) {
    counter = counter - 0.4;   // spin backward
    }
else if (keyIsDown(UP_ARROW)) {
    counter = counter +  2.4;   // spin faster
    } 
else if (keyIsDown(DOWN_ARROW)) {
    counter = counter -  2.4;   // spin backward faster
    }
else {
    counter = counter +  0.4;   // normal spin //fake right arrow
    }

if (counter < 0) {
    counter = counter + frames.length;  // wrap around when going backward
    }
}
