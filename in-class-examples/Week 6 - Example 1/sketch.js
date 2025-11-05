

let wasp;

// let x, y

function preload(){
  wasp = loadImage("wasp.png")
  print(wasp);
  angleMode(DEGREES)
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  noFill()
  stroke(255)

  // x = width/8
  // y = height/2

}


function draw(){
 background(50)


// if(dist(x,y, width/4, height/2) < 100){

//     background(255,100,0)
//     textSize(30)
//     fill(255)
//     text("Danger, wasp!", width/2, 100)

//  }


 //ellipse(width/4, height/2, 200,200)


 
 displayWasp(width*noise(frameCount/100), height*noise(10+frameCount/200),360*noise(frameCount/100))
 displayWasp(width*noise(frameCount/200), height*noise(10+frameCount/100),360*noise(frameCount/200))

}

function displayWasp(x, y, r){

  // pass the x, y coordinates and the rotation in the argument
  push()
  translate(x, y);
  rotate(57+r)
  image(wasp,0 ,0 ,100,100)
  pop()
  
}


function mousePressed(){
  
}


