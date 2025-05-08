  let string = `
  Maison Martin Margiela for View On Colour
  04/02/1998
  
  (Begin) `;
// Which character in the string are we up to on the typewriter
let currentCharacter = 0;
// Page margins for a sheet of paper effect
let pageMargin = 25;

/**
Gotta have a canvas
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  loadFont('font/RobotoSerif-Regular.ttf');
}

/**
Draws a sheet of paper and the current amount of the string that's being typed
*/
function draw() {
  background('#FAF9F4');
  var i = 0;
  // Work out the current string we're writing (the substring of the full string that the typewriter has written so far)
  // The substring() method will return all the characters of a string
  // between the starting and ending positions (starts at 0)
  let currentString = string.substring(0, currentCharacter);
  

  // Draw the current string on the page, with some margins
  push();
  textSize(17);
  textFont(`RobotoSerif-Regular`);
  textAlign(LEFT, TOP);
  text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin*2, height - pageMargin);
  pop();
  
  // Increase the current character so that we get a longer and
  // longer substring above. Using fractional numbers allows us to
  // slow down the pace.
  currentCharacter += 0.15
  // currentCharacter += random(0,0.5); // Try adding random amounts for a more "naturalistic" pace of typing

 /* strokeWeight(0);
  fill(0);
  circle(width-50, height-50, width/50); 
*/
}