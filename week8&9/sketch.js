//reference
//https://docs.ml5js.org/#/reference/handpose
//Hand Keypoint Detection: HandPose tries to detect the 2D and 3D coordinates of 21 keypoints on a hand.
// Handedness: HandPose tries to determine the handedness (left or right) of the detected hand.
// Multiple Hands: HandPose tries to detect multiple hands at the same time.

let handPose;
let video;
let hands = [];

async function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  resetVertices();

  handPose = await ml5.handPose({ maxHands: 1 });
////////////////////////////
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose.detectStart(video, gotHands);
  /////////////////////////////////
}

// --- tweak these ---
let blockSize = 16;     // pixelation block size
let grabRadius = 70;    // how close your pinch must be to a vertex to grab it
let pinchOn = 35;       // pinch closes when thumb-index distance drops below this
let pinchOff = 55;      // pinch opens when distance rises above this (prevents flicker)
let smoothing = 0.5;    // how quickly a grabbed vertex follows your fingers

// the mask: a polygon whose vertices you can drag
let vertices = [];
let grabbed = -1;       // index of the vertex being dragged (-1 = none)
let pinching = false;

function draw() {
//////////////////////////////////////////////
//FLIP AND RESET POSIITION
  scale(-1, 1);
  translate(-width, 0);
  image(video, 0, 0, width, height);
///////////////////////////////////////////////////////////////////////
  // 2. read the pinch and move vertices
  let pinchPoint = null;

  if (hands.length > 0) {
    let thumb = hands[0].keypoints[4];
    let index = hands[0].keypoints[8];
    let d = dist(thumb.x, thumb.y, index.x, index.y);
    pinchPoint = createVector((thumb.x + index.x) / 2, (thumb.y + index.y) / 2);

    // hysteresis: different thresholds for closing and opening
    if (!pinching && d < pinchOn) {
      pinching = true;
      grabbed = nearestVertex(pinchPoint); // try to grab a vertex
    } else if (pinching && d > pinchOff) {
      pinching = false;
      grabbed = -1; // let go
    }

    // drag the grabbed vertex toward the pinch point
    if (pinching && grabbed !== -1) {
      vertices[grabbed].x = lerp(vertices[grabbed].x, pinchPoint.x, smoothing);
      vertices[grabbed].y = lerp(vertices[grabbed].y, pinchPoint.y, smoothing);
    }
  } else {
    pinching = false;
    grabbed = -1;
  }

  // 3. pixelate only inside the polygon
  if (vertices.length >= 3) {
    video.loadPixels();
    noStroke();

    // bounding box of the polygon (only loop over this area)
    let minX = width, maxX = 0, minY = height, maxY = 0;
    for (let v of vertices) {
      minX = min(minX, v.x);
      maxX = max(maxX, v.x);
      minY = min(minY, v.y);
      maxY = max(maxY, v.y);
    }
    let xStart = max(0, floor(minX / blockSize) * blockSize);
    let yStart = max(0, floor(minY / blockSize) * blockSize);
    let xEnd = min(width, maxX);
    let yEnd = min(height, maxY);

    for (let y = yStart; y < yEnd; y += blockSize) {
      for (let x = xStart; x < xEnd; x += blockSize) {
        let cx = min(x + blockSize / 2, width - 1);
        let cy = min(y + blockSize / 2, height - 1);

        // skip blocks whose center is outside the polygon
        if (!insidePolygon(cx, cy, vertices)) continue;

        let i = (floor(cy) * video.width + floor(cx)) * 4;
        fill(video.pixels[i], video.pixels[i + 1], video.pixels[i + 2]);
        rect(x, y, blockSize, blockSize);
      }
    }
  }

///////////////////TRACKING POINTS ON HAND////////////////////////////////////////////
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      noStroke();
      fill(0, 255, 0);
      if (j == 4 || j == 8) {
        fill(255, 0, 0);
      }
      circle(keypoint.x, keypoint.y, 10);
    }
  }
/////////////////////////////////////////////////////////////////////
  // 5. draw the mask outline and vertex handles
  noFill();
  stroke(255);
  strokeWeight(2);
  beginShape();
  for (let v of vertices) vertex(v.x, v.y);
  endShape(CLOSE);

  for (let i = 0; i < vertices.length; i++) {
    noStroke();
    fill(i === grabbed ? color(255, 0, 255) : color(0, 200, 255));
    circle(vertices[i].x, vertices[i].y, i === grabbed ? 20 : 14);
  }

  // show the pinch point so you can aim
  if (pinchPoint) {
    noFill();
    strokeWeight(2);
    stroke(pinching ? color(255, 0, 0) : color(255, 255, 0));
    circle(pinchPoint.x, pinchPoint.y, 24);
  }
}

// find the vertex closest to the pinch (within grabRadius), or -1
function nearestVertex(p) {
  let best = -1;
  let bestDist = grabRadius;
  for (let i = 0; i < vertices.length; i++) {
    let d = dist(p.x, p.y, vertices[i].x, vertices[i].y);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  }
  return best;
}

// ray-casting point-in-polygon test
function insidePolygon(px, py, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    let xi = pts[i].x, yi = pts[i].y;
    let xj = pts[j].x, yj = pts[j].y;
    if ((yi > py) !== (yj > py) &&
        px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

function keyPressed() {
  if (key === 'r') resetVertices();
  // add a vertex at the center of the screen
  if (key === 'a') vertices.push(createVector(width / 2, height / 2));
  // remove the last vertex (keeps at least 3)
  if (key === 'd' && vertices.length > 3) vertices.pop();
}
function resetVertices() {
  vertices = [
    createVector(200, 150),
    createVector(440, 150),
    createVector(440, 330),
    createVector(200, 330),
  ];
  grabbed = -1;
}

function gotHands(results) {
  hands = results;
}