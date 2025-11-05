let numRows = 20, numCols = 20
let sliderX, sliderY

function setup() {
  createCanvas(windowWidth, windowHeight);

  sliderX = createSlider(1, 50)
  sliderY = createSlider(1, 50)

  //noStroke()
}

let counter = 0
function draw() {
  background(220, 50);

  numCols = sliderX.value()
  numRows = sliderY.value()


  for (let x = 0; x < numCols; x++) {
    for (let y = 0; y < numRows; y++) {

      if (mouseX > x * width / numCols && 
        mouseX < (x + 1) * width / numCols && 
        mouseY > y * height / numRows && 
        mouseY < (y+1) *height / numRows) {
        fill(255, 0, 0)
      }
      else {
        fill(255);
      }

      rect(x * width / numCols, y * height / numRows, width / numCols, height / numRows)

    }

  }

  counter += 0.05

  print(mouseX)
}
