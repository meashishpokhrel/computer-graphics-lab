let angle = 0

function setup() {
  createCanvas (400, 400, WEBGL)
}

function draw() {
  background (90)
  rectMode(CENTER)
  noStroke()
  fill (0, 0,255)
  rotateX(angle)
  rotateY(angle * 0.4)
  rect (0,0,150,150)
  angle += 0.07
}

