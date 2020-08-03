function setup() {
  createCanvas(700, 550); 
  // Creates canvas for drawing
  
  
  noStroke(); 
  // Removing the black portion of shapes
}

function draw() {
  background("#9b59b6");
  
  // Outline of flag
  fill(18,30,140); //Filling the outer shape first with blue color 
  beginShape();
  vertex(100,100);
  vertex(400,300);
  vertex(200,300);
  vertex(400,500);
  vertex(100,500);
  endShape();
  // Outer Shape Completed
  
  
  //For red part inside of the blue
  fill(205,20,10);
  beginShape();
  vertex(115,125);
  vertex(360,290);
  vertex(170,290);
  vertex(370,490);
  vertex(110,490);
  endShape();
  // completed red part
  
  
  
  //Drawing moon with white circle stacked with red circle


  fill(255,255,255);
  // crescent shape of moon
  ellipse(172,242,60,60);
  fill(206,24,13);

  ellipse(172,227,60,60);
  // Used Triangles for moon 
  fill(255,255,255);
  ellipse(172,255,30,30);
  triangle(172,240,179,247,177,234);
  triangle(172,240,165,247,166,234);
  triangle(177,242,182,248,184,236);
  triangle(167,242,160,248,161,236);
  triangle(182,244,187,252,188,240);
  triangle(162,244,158,252,156,238);
  triangle(180,252,190,256,193,243);
  triangle(164,252,155,256,151,243);
  // Completed making moon

  
  
  // Drawing of SUN

  ellipse(172,400,44,44);
  
  let v0 = createVector(172, 400);
  let v1 = createVector(33, 0);
  
  for(var ang=0;ang<360;ang += 30){
    ToDrawSun (v0, v1.rotate(ang), 'white',ang);
  } 
}

function ToDrawSun(base, vec, color,radian) {
  push();
  fill(color);
  translate(base.x, base.y);
  rotate(radians(radian));
  translate(vec.mag() - 14, 0);
  triangle(0, 7, 0, -7, 14, 0);
  pop();
}
