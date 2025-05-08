let rainbow1, rainbow2, robotoFont;
let textMask;

function preload() {
  robotoFont = loadFont('/font/RobotoSerif-Regular.ttf');
  rainbow1 = loadImage('/img/Rainbow Gradient 2.png');
  rainbow2 = loadImage('/img/Rainbow Gradient 5.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(robotoFont);
  textSize(15);
  textMask = createGraphics(width, height);
}


function draw() {
  
  noStroke();
  fill('#0a0a05');
  rect(0, 0, width, height / 2);
  fill('#FAF9F4');
  rect(0, height / 2, width, height / 2);

  let d = map(dist(mouseX, mouseY, width / 6, height / 2.5), 0, width/1.25, 255, 0);
  let d2 = map(dist(mouseX, mouseY, width / 6, height / 1.5), 0, width/1.25, 255, 0);
  
  let textX = width / 6;
  let textY = height / 2.5;


  image(rainbow1, 0, 0, width, height / 2);
  tint(255, d2);

  fill(255);
  textSize(15);
  text('What is color?', width / 6, height / 2.5);

  fill(255, 255, 255, d);
  text('An Intensity, a temperature, a clash, a harmony.', width / 6, height / 2.35);

  // Text mask logic
let sizeMultiplier = map(dist(mouseX, mouseY, textX, textY), 0, width / 1.25, 1.25, 1.0);
let dynamicSize = 16 * sizeMultiplier;
// Draw masked text image
textMask.clear();
textMask.textFont(robotoFont);
textMask.textSize(dynamicSize);
textMask.fill(255);
textMask.noStroke();
textMask.text('When it asks.', textX, textY);

// Apply mask
let maskedImage = rainbow2.get();
maskedImage.mask(textMask);

tint(255, d2);
image(maskedImage, 0, height / 2, width, height / 2);

// Static text above it
fill(0);
textSize(15);
text('How do you use it?', width / 6, height / 1.5);
  
}

