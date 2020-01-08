var rood = 255;
var groen = 255;
var blauw = 10;

function setup() {
  // put setup code here
  createCanvas(750,750);
  background(240,240,240);
}

function draw() {
  strokeWeight(0);
  fill("white");
  rect(50,50,400,526);
  fill("blue");
  rect(50,50,140,60);
  fill("yellow");
  rect(50,506,140,70)
  fill(0,0,0);
  strokeWeight(10);
  line(190,50,190,578);
  strokeWeight(14);
  line(50,110,450,110);
  line(50,230,450,230);
  line(50,500,188,500);
}