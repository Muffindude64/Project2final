let office;

function preload(){
  office = loadImage('../../../../../Images/office.jpg');

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(139,69,19);

  image(office, 0, 0, 1500, 900);
  

  rect(430, 80, 600, 900);

  strokeWeight(20);
}