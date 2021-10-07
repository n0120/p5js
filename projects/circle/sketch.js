function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(128, 128, 128);
}

function draw() {
  // put drawing code here
  if(mouseIsPressed){
    r = 0;
    g = 0;
    b = 0;
  } else {
    r = RANDOM(255);
    g = RANDOM(255);
    b = RANDOM(255);
  }
  fill(r, g, b);
  r = 100;
  ellipse(mouseX, mouseY, r, r);
}