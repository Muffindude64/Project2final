function setup() {
  createCanvas(windowWidth, windowHeight);
}
// all of the situations use basic html shapes to make a representation fo a situation so most notes won't really be there
function draw() {
  background(25, 50, 55);

   strokeWeight(20);
   stroke('black');
fill(10, 10, 20);
  rect(200, 100, 1090, 400);
fill('lightblue');
  rect(300, 150, 890, 300);

fill(0);
circle(600, 390, 100);
circle(720, 390, 100);


fill('darkred')
rect(300, 500, 200, 190, 20);
rect(1000, 500, 200, 190, 20);
  quad(350, 390, 1150, 390, 1100, 690, 400, 690);
}