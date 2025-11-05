

let wasp;
let xLoc, yLoc, rotation;

let obstacleXLocs = []
let obstacleYLocs = []
let obstacleDs = []

let numObstacles = 30
let crossedObstacle = false;
let pCrossedObstacle = false; 

let count = 0;

let g

function preload(){
  wasp = loadImage("wasp.png")
  print(wasp);
  angleMode(DEGREES)
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  noFill()
  stroke(255)

  g = createGraphics(width, height);
  g.background(255,100,0)

  for(let i = 0; i<numObstacles; i++){
    obstacleXLocs[i] = random(width)
    obstacleYLocs[i] = random(height)
    obstacleDs[i] = random(10,100)
  }

  print(obstacleXLocs)

  xLoc = width/8
  yLoc = height/2
  rotation = 0

}


function draw(){
 

 crossedObstacle = false;

 background(50)
 
for(let i = 0; i<numObstacles; i++){
  obstacle(obstacleXLocs[i], obstacleYLocs[i], obstacleDs[i])
}
 moveWasp()
 displayWasp(xLoc, yLoc, rotation);

 if(crossedObstacle == true){
   imageMode(CORNER);
   textSize(30)
   fill(255)
   image(g,0,0)
   text("obstacle!", width/2, 100)
   noFill()
   

 }


 if(pCrossedObstacle == false && crossedObstacle == true){

   count++
   print(count)
 }
 

 if(count>3){
   imageMode(CORNER);
   textSize(30)
   fill(255)
   image(g,0,0)
   text("game over", width/2, 100)
  noLoop()
 }




 pCrossedObstacle = crossedObstacle;
 
 
}


function obstacle(x, y, d){

  ellipse(x, y, d)


  if(dist(xLoc,yLoc, x,y) < d/2){
    crossedObstacle = true;  
    // background(255,100,0)
 }
 

 

}

function moveWasp(){
    if(keyIsDown(RIGHT_ARROW) === true){
      xLoc+=4;
      rotation = 0
    }
    if(keyIsDown(LEFT_ARROW) === true){
      xLoc-=4;
      rotation = 180
    }
      if(keyIsDown(UP_ARROW) === true){
      yLoc-=4;
      rotation = 270
    }
    if(keyIsDown(DOWN_ARROW) === true){
      yLoc+=4;
      rotation = 90
    }

    if(keyIsDown(RIGHT_ARROW) === true && keyIsDown(UP_ARROW) === true){
      rotation = -45
    }

    if(keyIsDown(RIGHT_ARROW) === true && keyIsDown(DOWN_ARROW) === true){
      rotation =  45
    }

    if(keyIsDown(LEFT_ARROW) === true && keyIsDown(UP_ARROW) === true){
      rotation = -135
    }
    if(keyIsDown(LEFT_ARROW) === true && keyIsDown(DOWN_ARROW) === true){
      rotation = - 225
    }

}
function displayWasp(x, y, r){

  imageMode(CENTER);

  // pass the x, y coordinates and the rotation in the argument
  push()
  translate(x, y);
  rotate(57+r)
  image(wasp,0 ,0 ,100,100)
  pop()
  
}


function mousePressed(){

}


