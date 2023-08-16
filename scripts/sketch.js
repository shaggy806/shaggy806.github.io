let x = 50
let xV = 0;
let y = 500
let yV = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  circle(x, y, 50);
  x += xV
  xV *= 0.97
  y += yV
  if (y < 25){
    y = 25
    yV = -yV *0.5
  } else {
    yV -= 0.7
  }
}

function mousePressed(){
  yV = 15
  xV = (mouseX - x)/abs(mouseX - x)*10
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}