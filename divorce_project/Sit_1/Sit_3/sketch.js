function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(70, 90, 90);
stroke(3);
  fill('darkred')
rect(300, 500, 200, 190, 20);
rect(1000, 500, 200, 190, 20);
  quad(350, 390, 1150, 390, 1100, 690, 400, 690);
  noStroke();
  rect(350, 500, 800, 190);
  stroke(3);
  rect(350, 580, 800, 110);
  line(370, 500, 350, 580, 3);
  line(370, 500, 1150, 500);
  line(1135, 500, 1150, 580);
strokeWeight(20);
fill(15, 15, 20);
  circle(360, 490, 80)
  line(360, 530, 800, 560);
  line(800, 560, 840, 430);
  line(840, 430, 890, 560);

  line(80, 340, 150, 380);
  line(150, 290, 80, 340);
  line(150, 490, 150, 700);
  line(150, 490, 200, 700);
  line(150, 220, 150, 490);
  circle(150, 220, 80);

}