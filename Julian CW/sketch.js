 let col, col1, col2;
  let x = 400, y = 100

  let xV = 4, yV = 2
function setup() {
  createCanvas(windowWidth, windowHeight)
 
  
  
  
  col1 = color('#851400')
  col2 = color('#00e2f2')


  strokeWeight(3)

}


function draw() {
  background(150)

  ellipse(x , y, 50)
  
  if(x > width){
    x=0
  }
  if(y > height){
    y=0
  }
  
  //hi  
  y++ 
  x++ 

}