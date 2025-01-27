// https://p5js.org/reference/p5/image/
// for this workshop I want to alter images of ducks and animate them in my sketch,
// the fisrt issue with this plan is transforming my image into a x*y*3 matrix of pixel values.
//https://p5js.org/reference/p5.Image/pixels/

let img;

function preload() {
  img = loadImage('/Scaup.jpg'); //placeholder
  // load all my images to use in the sketch
  img1 = loadImage('/mallard.jpg');
  img2 = loadImage('/Whio.jpg');
  img3 = loadImage('/Scaup.jpg');
  img4 = loadImage('/Scaup1.jpg');
  img5 = loadImage('/Paradise-Shelduck.jpeg');
  img6 = loadImage('/Paradise-Duckling.jpeg');
  img7 = loadImage('/Campbell.jpg');
  img8 = loadImage('/Campbell1.jpg');
  img9 = loadImage('/Campbell2.jpg');
}
function process(img){
  // the challenge is working out how to alter the pixels the way i want.
  // traversing the range of the images pixels
  for (let i = 0; i < img.pixels.length; i += 4) {
    /*  practicing traversing the array by setting pixels to specific colours
        for some reason changing the red value to 255 and everything else to 0 does not make my image red, because my increment was 1!
        FIX: pixels are a single array with every 4 values corresponding to one pixel! */ 
    // // Red.
    // img.pixels[i] = 255;
    // // Green.
    // img.pixels[i+1] = 0;
    // // Blue.
    // img.pixels[i+2] = 0;
    
    /* Now to set the pixel to the maximum RGB value */
    // any pixels that are mostly red will be red
    img.pixels[i] *= int((img.pixels[i] > img.pixels[i+1]) && (img.pixels[i] > img.pixels[i+2]));
    // any pixels that are mostly green will be green
    img.pixels[i + 1] *= int((img.pixels[i+1] > img.pixels[i+2]) && (img.pixels[i+1] > img.pixels[i]));
    // any pixels that are mostly blue will be blue
    img.pixels[i + 2] *= int((img.pixels[i+2] > img.pixels[i]) && (img.pixels[i+2] > img.pixels[i+1]));
    // // Alpha.
    // //text(str(img.pixels[i + 3]),40, 40);
    }
}

function setup() {
  ratio = img.width/img.height; // variable to fix the display ratio to the image ratio
  tic = 0; // setup tic counter outside of draw function so it can iterate to keep time
  iteration = 0; // iteration variable will adjust where new photos appear on the screen
  w = 400;  // variable to easily adjust the width of the images.
  createCanvas(w, w/ratio); // create canvas
  background(0); // create background
}

function draw(){

  image(img, iteration, iteration, width-(2*iteration), height-(2*iteration), 0, 0, img.width, img.height, COVER);
  // Load the image's pixels.
  img.loadPixels();
  process(img);
  // Update the image.
  img.updatePixels();

  if ((tic % 200 == 0)&&(iteration <= height/2)){ // every 200 tics we will add a new image
    seed = int(random(9)); 
    // which image we use will be based on a random selection of my ducks
    // thus resulting in a unique 'collage' over each iteration.
    if (seed == 1){img = img1;}
    if (seed == 2){img = img2;}
    if (seed == 3){img = img3;}
    if (seed == 4){img = img4;}
    if (seed == 4){img = img5;}
    if (seed == 6){img = img6;}
    if (seed == 7){img = img7;}
    if (seed == 8){img = img8;}
    if (seed == 9){img = img9;}
    iteration += 10;
  }
  tic += 1;
}