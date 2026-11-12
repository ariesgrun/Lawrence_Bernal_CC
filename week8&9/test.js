

async function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  handPose = await ml5.handPose({ maxHands: 1 });
////////////////////////////
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose.detectStart(video, gotHands);
/////////////////////////////////

  for (let i = 0; i < numPoints; i++) {
    shapePoints[i] = createVector(random(width * 0.25, width * 0.75),
    random(height * 0.25, height * 0.75));
  }
}


let handPose;
let video;
let hands = [];

let shapePoints = [];
let numPoints = 5;

let pinch = 0;
let pinchLoc;





function draw() {
//////////////////////////////////////////////
//FLIP AND RESET POSIITION
  scale(-1, 1);
  translate(-width, 0);
  image(video, 0, 0, width, height);
///////////////////////////////////////


////////////middlef////////////////////////
  if (hands.length > 0) {
    let t = hands[0].keypoints[4];
    let m = hands[0].keypoints[12];
    if (dist(t.x, t.y, m.x, m.y) < 25) {
      middlef();
    }
  }


/////////////////////////
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];

/////////////////TRACKING POINTS ON HAND///////////////////////////
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      noStroke();
      fill(0, 255, 0);

      if (j == 4 || j == 8) {
        fill(255, 0, 0);     // thumb and index - red
      }
      if (j == 12) {
        fill(255, 255, 0);   // middle - yellow
      }
      if (j == 16) {
        fill(0, 0, 255);     // ring - blue
      }
      if (j == 20) {
        fill(255, 0, 255);   // pinky - purple
      }

      circle(keypoint.x, keypoint.y, 10);
    }

// 4  - thumb tip
// 8  - index tip
// 12 - middle tip
// 16 - ring tip
// 20 - pinky tip
///////////////////////////////////////////////////

    // 
    let thumb = createVector(hand.keypoints[4].x, hand.keypoints[4].y);
    let index = createVector(hand.keypoints[8].x, hand.keypoints[8].y);
    let middle = createVector(hand.keypoints[12].x, hand.keypoints[12].y);
    let ring = createVector(hand.keypoints[16].x, hand.keypoints[16].y);
    let pinkyTip = createVector(hand.keypoints[20].x, hand.keypoints[20].y);

    // 
    if (thumb.dist(index) < 25) {
      pinch = 1;
      pinchLoc = thumb.copy();
    } else {
      pinch = 0;
    }

    // if pinching, move the first corner that's close enough
    if (pinch == 1) {
      for (let k = 0; k < shapePoints.length; k++) {
        if (pinchLoc.dist(shapePoints[k]) < 25) {
          shapePoints[k].set(pinchLoc);

          // if one is close enough, stop going through the array
          // and set the location of that point to the thumb
          break;
        }
      }
    }
  }

  // the mask shape 
  fill(255, 255, 255, 80);
  stroke(255);
  strokeWeight(2);
  beginShape();
  for (let p = 0; p < numPoints; p++) {
    vertex(shapePoints[p].x, shapePoints[p].y);
  }
  endShape(CLOSE);

  // Draw the corner handles outside beginShape/endShape
  fill(0, 200, 255);
  noStroke();
  for (let p = 0; p < numPoints; p++) {
    circle(shapePoints[p].x, shapePoints[p].y, 8);
  }
}

function gotHands(results) {
  hands = results;
}
let invertImg;
function middlef() {
  video.loadPixels();
  
}

function ringf() {

}

function pinky() {

}