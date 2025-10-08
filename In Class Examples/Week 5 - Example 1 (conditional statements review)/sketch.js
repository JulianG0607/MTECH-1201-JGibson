let x, y
let xV = 4, yV = 3

function setup() {
  createCanvas(600, 600);
  x = width/2
  y = height/2
  // frameRate(4)
  noStroke()

}

function draw() {
  background(220,20);

  

  if(x>width){
    xV = -xV;
  }
  if(y>height){
    yV = -yV;
  }
  if(x< 0){
    xV=-xV;
  }
  if(y< 0){
    yV=-yV;
  }

  //ellipse(x + random(-50,50), y +random(-50,50), 50)

  fill(255,random(80,180),0)

 // ellipse(random(width), random(height), 50)


  ellipse(x , y ,50)

  // x += random(xV);
  // y += random(yV);

  // x += -1
   y+=yV

  print(x, y)
}
