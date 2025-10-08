

let wasp;

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
}


function draw(){
 background(50)
 noFill()

let x = width * noise(frameCount* 0.01)
let y = height * noise(frameCount*0.01 +10)
let r = 360* noise(frameCount*0.01,frameCount*0.01 +10  )

if(dist(x,y, width/4, height/2) < 100){
  
    background(255,100,0)
    textSize(30)
    fill(255,100,0)
    text("Danger, wasp!", width/2, 100)

 }


 ellipse(width/4, height/2, 200,200)

 push()
 translate(x, y)
 rotate(r)
 image(wasp,0 ,0 ,100,100)
 pop()



  

}


function mousePressed(){
  
}


