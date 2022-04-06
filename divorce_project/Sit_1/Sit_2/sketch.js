function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(60, 45, 60);

fill('grey');
  rect(0, 620, 1500, 200);

// Made a for loops to try and go with like a road look
strokeWeight(50);
  var x = 50;
  while (x <= 1900) {
    stroke('yellow');

    line(x, 720, x + 20, 720);
    x = x + 150

  }




strokeWeight(20);
  stroke(0);
fill('darkblue');
  quad(550, 390, 1100, 390, 1150, 690, 400, 690);

fill(60, 45, 60);
quad(600, 420, 800, 420, 800, 550, 550, 550);

quad(600+280, 420, 780+280, 420, 800+280, 550, 600+280, 550);

fill(0);
circle(650, 690, 150);

circle(950, 690, 150);
fill(15, 15, 20)
rect(900, 500, 50, 50);
circle(925, 490, 70);
rect(920, 500, 50, 50);
circle(945, 490, 70)

}