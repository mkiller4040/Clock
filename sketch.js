var hr;
var min;
var sec;

function setup() 
{
  createCanvas(800,400);
}

function draw() 
{
  background(255,255,255);

  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 24, 0, 360);

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(600,75,500,250);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(500,250,550,400);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(450,175,500,250);
  pop();
  
  drawSprites();
}