//reference
//https://docs.ml5js.org/#/reference/handpose
//Hand Keypoint Detection: HandPose tries to detect the 2D and 3D coordinates of 21 keypoints on a hand.
// Handedness: HandPose tries to determine the handedness (left or right) of the detected hand.
// Multiple Hands: HandPose tries to detect multiple hands at the same time.


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


let shapecolor = [255, 255, 255, 80];


function draw() {
//////////////////////////////////////////////
//FLIP AND RESET POSIITION
  scale(-1, 1);
  translate(-width, 0);
  image(video, 0, 0, width, height);
///////////////////////////////////////

  // start each frame with the default color (used when there's no hand)
  shapeColor = [255, 255, 255, 80];

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

    // fingertip vectors 
    let thumb = createVector(hand.keypoints[4].x, hand.keypoints[4].y);
    let index = createVector(hand.keypoints[8].x, hand.keypoints[8].y);
    let middle = createVector(hand.keypoints[12].x, hand.keypoints[12].y);
    let ring = createVector(hand.keypoints[16].x, hand.keypoints[16].y);
    let pinkyTip = createVector(hand.keypoints[20].x, hand.keypoints[20].y);

    // fill the shape with the color under the index fingertip
    video.loadPixels();
    if (video.pixels.length > 0) {
      let px = constrain(floor(index.x), 0, video.width - 1);
      let py = constrain(floor(index.y), 0, video.height - 1);
      let p = (py * video.width + px) * 4; // where that pixel starts in the array
      shapeColor = [video.pixels[p], video.pixels[p + 1], video.pixels[p + 2], 160];
    }

    
    // each finger has its own function
    middleRing(middle, ring);   
    middlef(thumb, middle);
    ringf(thumb, ring);
    pinky(thumb, pinkyTip);

    // pinch with index
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

  // the mask
  fill(shapeColor[0], shapeColor[1], shapeColor[2], shapeColor[3]);
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

// middle + ring = spin the mask 
function middleRing(middle, ring) {
  if (middle.dist(ring) < 15) {
    // find the center of the shape 
    let center = createVector(0, 0);
    for (let k = 0; k < shapePoints.length; k++) {
      center.add(shapePoints[k]);
    }
    center.div(shapePoints.length);

    // rotate each corner around that center
    for (let k = 0; k < shapePoints.length; k++) {
      let offset = p5.Vector.sub(shapePoints[k], center);
      offset.rotate(0.05); // how much to turn each frame (negative = other way)
      shapePoints[k].set(p5.Vector.add(center, offset));
    }
  }
}

// thumb + middle  = yellow 
function middlef(thumb, middle) {
  if (thumb.dist(middle) < 25) {
    shapeColor = [255, 255, 0, 160];
  }
}

// thumb + ring  = blue 
function ringf(thumb, ring) {
  if (thumb.dist(ring) < 25) {
    shapeColor = [0, 0, 255, 160];
  }
}

// thumb + pinky  = purple 
function pinky(thumb, pinkyTip) {
  if (thumb.dist(pinkyTip) < 25) {
    shapeColor = [255, 0, 255, 160];
  }
}