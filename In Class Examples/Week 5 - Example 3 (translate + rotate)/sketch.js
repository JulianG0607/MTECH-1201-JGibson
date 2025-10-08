

let x = 0, y= 0;

let xV = 3; let yV = 3; let rV = 3;

function setup(){

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  stroke(255)
}
let r = 0;
function draw(){
  background(0)

  // push()
  // translate(mouseX,100)
  // ellipse(0,0,50)
  // translate(mouseX,100)
  // ellipse(0,0,50)
  // translate(mouseX,100)
  // ellipse(0,0,50)
  // translate(mouseX,100)
  // ellipse(0,0,50)
  // pop()
push()
  translate(width/2, height/2)
  rotate(r)
  line(0,0,100,0)
  translate(100, 0)
  rotate(r)
  line(0,0,100,0)
  translate(100, 0)
  rotate(r)
  line(0,0,100,0)
  translate(100, 0)
  rotate(-r)
  line(0,0,100,0)
  translate(100, 0)
  rotate(r)
  line(0,0,100,0)
pop()

push()
translate(x,y)
ellipse(0,0, 50) 
rotate(r)
translate(0,80)

ellipse(0,0, 20) 
pop()

  r+=rV

  x+=xV
  y+= yV;
}

function mousePressed(){
xV = 

xV = - xV
yV = -yV
rV = -rV
}


