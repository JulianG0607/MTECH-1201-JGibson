let numRows = 20, numCols = 20
let sliderX, sliderY

function setup() {
  createCanvas(windowWidth, windowHeight);

  sliderX = createSlider(1,50)
  sliderY = createSlider(1,50)

}

function draw() {
  background(220,50);

  numCols = sliderX.value()
  numRows = sliderY.value()

  for(let x = 0; x < numCols; x++){
    for(let y = 0; y < numRows; y++){

      fill(random(255), random(255),random(255))
      rect(x*width/numCols, y * height/numRows, width/numCols, height/numRows)

    }

  }
 
}
