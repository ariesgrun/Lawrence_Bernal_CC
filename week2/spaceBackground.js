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