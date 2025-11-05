
let mario;

function preload(){
  mario = loadImage("mario.png")
  print(mario);
  angleMode(DEGREES)
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  noFill()
  stroke(255)
}


function draw(){
 background(50)
 noFill()

let x = width * noise(frameCount* 0.01)
let y = height * noise(frameCount*0.01 +10)
let r = 360* noise(frameCount*0.01,frameCount*0.01 +10  )

if(dist(x,y, width/4, height/2) < 100){
  
    background(100,225,0)
    textSize(30)
    fill(255,255,0)
    text("it's me, mario!", width/2, 100)

 }
if(dist(x,y, width/2, height/2) < 100){
  
    background(100,225,0)
    textSize(30)
    fill(255,100,0)
    text("lets a go!!!", width/2, 100)
}

if(dist(x,y, width/2, height) < 100){
  
    background(100,225,0)
    textSize(30)
    fill(255,100,0)
    text("oh no! :(", width/2, 100)
}

if(dist(x,y, width, height/2) < 100){
  
    background(100,225,0)
    textSize(30)
    fill(255,0,255)
    text("secret star! :(", width/2, 100)
}

if(dist(x,y, width/1.33, height/2) < 100){
  
    background(100,225,0)
    textSize(30)
    fill(255,0,255)
    text("go to next world!!! (click)", width/2, 100)
}


 ellipse(width/4, height/2, 200,200)

 push()
 translate(x, y)
 rotate(r)
 image(mario,0 ,0 ,100,100)
 pop()

ellipse(width/2, height/2, 200,200)

 push()
 translate(x, y)
 rotate(r)
 image(mario,0 ,0 ,100,100)
 pop()

 
  
 

 ellipse(width/1.33   , height/2, 200,200)

 push()
 translate(x, y)
 rotate(r)
 image(mario,0 ,0 ,100,100)
 pop()
}


function mousePressed(){ 
  
  
}



