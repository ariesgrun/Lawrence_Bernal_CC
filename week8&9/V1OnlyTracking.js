let handPose;
let video;
let hands = [];

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
}


function draw() {
//////////////////////////////////////////////
//FLIP AND RESET POSIITION
  scale(-1, 1);
  translate(-width, 0);
  image(video, 0, 0, width, height);
  
///////////////////////////////////////


/////////////////TRACKING POINTS ON HAND///////////////////////////
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
///////////////////////////////////////////////////

}


function gotHands(results) {
  hands = results;
}