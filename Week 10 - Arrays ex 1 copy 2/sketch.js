
let xLoc = []
let yLoc = []

let numSegments = 200;

let col1;
let col2;  

function setup(){
  createCanvas(windowWidth, windowHeight)


  for(let i = 0 ; i<numSegments; i++){
    xLoc[i] = width/2
    yLoc[i] = height/2
  }

  console.log(xLoc)

  col1 = color(random(255),random(255),random(255))
  col2 = color(random(255),random(255),random(255))

}

let count = 0

function draw(){
background(0)
fill(0)
 
 xLoc[numSegments-1] = mouseX
 yLoc[numSegments-1] = mouseY

// xLoc[numSegments-1] = random(width)
// yLoc[numSegments-1] = random(height)


//  xLoc[numSegments-1] = width/2 + map(noise(count), 0,1,20,-20)
//  yLoc[numSegments-1] = height/2 + map(noise(count +10), 0,1,20,-20)





    for(let i = 0 ; i<numSegments; i++){
      
      xLoc[i] = xLoc[i+1]
      yLoc[i] = yLoc[i+1]


      let diameter = 200*sin(map(i, 0,numSegments, 0,PI))

      let col = lerpColor(col1, col2, sin(map(i, 0,numSegments, 0,PI)))

      stroke(col);


      ellipse(xLoc[i], yLoc[i],diameter)
    }

  count += 0.05

}

function mousePressed(){


}