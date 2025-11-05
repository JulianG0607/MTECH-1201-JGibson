

let wasp;

function preload(){
  wasp = loadImage("wasp.png")
  print(wasp);
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
}


function draw(){
 background(50)

 image(wasp, mouseX,mouseY,100,100)

 
  

}


function mousePressed(){



}


