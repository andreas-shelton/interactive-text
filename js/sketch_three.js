let robotoFont;

function preload() {
  robotoFont = loadFont('font/RobotoSerif-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(robotoFont);
  textSize(15);
}

function draw() {
  background('#FAF9F4');
  
  let textX = width / 6;
  let textY1 = height / 2.5;
  let textY2 = height / 2.35;

  let d = map(dist(mouseX, mouseY, textX, textY1), 0, width / 1.25, 255, 0);
  d = constrain(d, 0, 255);

  fill(0);
  text('What is black?', textX, textY1);
  
  fill(0, d);
  rect(0, 0, width, height);

  fill('#FAF9F4');
  text('An absence, a presence, a mood, a mantle.', textX, textY2);
  
}
