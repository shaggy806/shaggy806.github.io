const test = []
function setup() {
  rectMode(CENTER)
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 30; i++){
    test.push(new ball)
  }
}

function draw() {
  background(220);
  for (i = 0; i < test.length; i++){
    for (j = i+1; j < test.length; j++){
      test[i].checkCollision(test[j])
    }
    test[i].run()
  }

}

function mousePressed(){
  test[0].vel.x = (mouseX - test[0].pos.x)/20
  test[0].vel.y = (mouseY - test[0].pos.y)/20
  // let nBall = new ball()
  // nBall.pos.x = mouseX
  // nBall.pos.y = mouseY
  // nBall.vel.x = random(20)-10
  // nBall.vel.y = random(20)-10
  // test.push(nBall)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}