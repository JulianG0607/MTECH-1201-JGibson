let r = 0.1
let angle=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
   
}

function draw() {
  background(220);
 
  translate(width/2,height/2)
  rotate(angle);
 rect(0, 0,200,50)
 translate(200,50)
 rotate(angle);
 rect(0, 0,200,50)
 translate(200,50)
 rotate(angle);
 rect(0, 0,200,50)

 angle = angle+r
 
}

function mousePressed(){
r = -r 

}