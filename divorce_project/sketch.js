// First creating the variable for the image 
let divorce_image;
function preload(){
  divorce_image = loadImage('Images/divorce_image.jpg')
// then pre loading the image into the project
//code for inserting image was refreneced from the P5.js reference
}



function setup() {
  createCanvas(windowWidth, windowHeight);
// last project I didn't make window width and height so I wanted to do that this time

  
}

function draw() {
  background(0, 0, 0);
//image is loaded in here and I found out the edge of the screen width and height through trial and error
  image(divorce_image, 0, 0, 1500, 900);

}
