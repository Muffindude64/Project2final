function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('black');
  stroke('black');
  fill(255, 255, 200);
  rect(150, 150, 200, 400);

  line(250, 250, 250, 400);




noStroke();
fill('brown');
quad(160, 540, 340, 540, 330, 520, 170, 520 );

stroke('black');
fill(15, 15, 20);
  circle(250, 250, 60);
line(240, 400, 240, 520);
line(260, 400, 260, 520);
noStroke();
fill('yellow');
quad(160, 540, 340, 540, 500, 900, 0, 900);


  strokeWeight(20);
}
