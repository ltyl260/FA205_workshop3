*link: https://ltyl260.github.io/FA205_workshop3/*
## Workshop 3: Images
I collected a series of images. I made my p5.js sketch randomly select out of my images and add them into the screen getting smaller each time so you are still left with the border of the previous images. This generates a new collage each time the sketch is run.
# Make a collage of ducks with the RGB Values exaggerated
I manipulated my images so that the RGB  values we as exaggerated as possible, it was easy to do this with Boolean logic and multiplication!
>/* Now to set the pixel to the maximum RGB value */
 > *// any pixels that are mostly red will be red*    
> img.pixels[i] *= int((img.pixels[i] > img.pixels[i+1]) && (img.pixels[i] > img.pixels[i+2]));
 >*// any pixels that are mostly green will be green*
 > img.pixels[i + 1] *= int((img.pixels[i+1] > img.pixels[i+2]) && (img.pixels[i+1] > img.pixels[i]));
 >*// any pixels that are mostly blue will be blue
 > img.pixels[i + 2] *= int((img.pixels[i+2] > img.pixels[i]) && (img.pixels[i+2] > img.pixels[i+1]));

I tried to make a new repository for my p5.js project on your GitHub account and publish your sketch as a webpage, 
*but no matter what I did my page wouldn’t load properly* ** ITS BEEN WORKING PERFECTLY LOCALLY ** so I am not too sure what went wrong there…
