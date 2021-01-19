var hr = 0;
var min;
var sec;
var scAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(800,900);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  min = minute();
  sec = second();
  if(hour()>=12){
    hr=hour();
 }
 else if(hour()<12){
    hr=hour()-12    
 }
  scAngle = map(sec, 0, 60, 0, 360);
  mnAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360); 
  
  textSize(50)
  stroke("white")
  fill("white")
  text("TIME: "+hr+" : "+min+" : "+sec, 200, 850)

  translate(400, 400);
  rotate(-90)
  
  push();
  stroke("#33F701");
  strokeWeight(15);
  noFill();
  arc(0, 0, 560, 560, 0, scAngle);
  rotate(scAngle)
  line(0, 0, 200, 0);
  pop();

  push();
  stroke("#00C0F2");
  strokeWeight(15);
  noFill();
  arc(0, 0, 500, 500, 0, hrAngle);
  rotate(hrAngle);
  line(0, 0, 100, 0);
  pop();

  push();
  stroke("#F601F2");
  strokeWeight(15);
  noFill();
  arc(0, 0, 530, 530, 0, mnAngle);
  rotate(mnAngle);
  line(0, 0, 150, 0);
  pop();

  drawSprites();
}