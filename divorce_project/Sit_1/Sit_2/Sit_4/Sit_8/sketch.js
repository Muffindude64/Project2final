function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('darkred');
  stroke('black');
  fill(255, 255, 200);
  rect(150+900, 150, 200, 400);

  line(260+900, 260, 270+900, 350);
  line(270+900, 350, 260+900, 400);
  line(260+900, 280, 220+900, 380);






noStroke();
fill('brown');
quad(160+900, 540, 340+900, 540, 330+900, 520, 170+900, 520 );

stroke('black');
fill(15, 15, 20);
  circle(240+900, 260, 60);
line(260+900, 400, 220+900, 520);
line(260+900, 400, 280+900, 520);
noStroke();
fill('lightyellow');
quad(160+900, 540, 340+900, 540, 500+900, 900, 0+900, 900);


  strokeWeight(20);
}
