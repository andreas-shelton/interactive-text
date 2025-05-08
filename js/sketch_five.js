let robotoFont, texture1, texture2;

function preload() {
  robotoFont = loadFont('font/RobotoSerif-Regular.ttf');
  texture1 = loadImage('img/texture1.png');
  texture2 = loadImage('img/texture2.png');
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
  let xy = width/2 + height/3;
  let xy2 = height/2 + width/3;

  let d = map(dist(mouseX, mouseY, textX, textY1), 0, xy, 255, 0);
    let d2 = map(dist(mouseX, mouseY, textX, textY1), 0, xy2, 255, 0);

  d, d2 = constrain(d, 0, 175);
  
    let d3 = map(dist(mouseX, mouseY, textX, textY1), 0, xy, 0, 255);
      
  image(texture2, 0, 0, width, height);
  tint(255, d-75);
  
  image(texture1, 0, 0, width, height);
  tint(255, d);

  fill(0, 0, 0, d3);
  text('A result of time.', textX, textY2);
   
  filter(ERODE);
  
  fill(0);
  text('What is texture?', textX, textY1);
  
}
