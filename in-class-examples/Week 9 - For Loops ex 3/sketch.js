let numRows = 20, numCols = 20
let sliderX, sliderY

function setup() {
  createCanvas(windowWidth, windowHeight);

  sliderX = createSlider(1,50)
  sliderY = createSlider(1,50)

  noStroke()
}

let counter = 0
function draw() {
  background(220,50);

  numCols = sliderX.value()
  numRows = sliderY.value()


  for(let x = 0; x < numCols; x++){
    for(let y = 0; y < numRows; y++){
     
      let n = noise(x*0.1,y*0.1,counter);
     
    
     let r = map(x,0,numCols, 0,255)*n
     let g = map(y,0,numRows, 0,255)*n
     let b = map(x,0,numCols, 255,0)*n

      //fill(x*5, y*5, 255 - x*5)

      fill(r, g, b)
      rect(x*width/numCols, y * height/numRows, width/numCols, height/numRows)

    }

  }

  counter+=0.05
 
}
