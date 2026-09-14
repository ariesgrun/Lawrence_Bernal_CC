// https://p5js.org/tutorials/coordinates-and-transformations/
// https://p5js.org/tutorials/custom-geometry/
// https://p5js.org/tutorials/lights-camera-materials/#camera-and-view
// https://p5js.org/reference/p5/camera/




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  debugMode()

  describe('A red box on a white background.');
}
function draw() {
  background(0);
  // "#315329"
  fill(255, 0, 0);
  box();

  for (let i = 0; i < windowWidth; i += 50) {{
        push()
        fill(255, 255, 255)
        translate(i, 0 , 0 )
        sphere()
    }
    pop()
  }

  


  orbitControl();
}