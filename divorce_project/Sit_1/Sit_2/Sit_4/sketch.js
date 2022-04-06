function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120, 140, 90);

line(300, 160, 300, 370);
line(400, 145, 400, 370);
line(500, 130, 500, 370);
line(1000, 170, 1000, 370);
line(900, 160, 900, 370);

fill('orange');
circle(300, 160, 60);
circle(400, 145, 60);
circle(500, 130, 60);

fill(15, 15, 20);
circle(1000, 170, 60);
circle(900, 160, 60);

fill('brown');
rect(310, 390, 80, 100);
rect(1000, 390, 80, 100);
  ellipse(700, 370, 900, 300);





strokeWeight(20);
}