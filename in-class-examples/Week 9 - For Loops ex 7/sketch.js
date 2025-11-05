let numRows = 20, numCols = 20
let sliderX, sliderY

let vals = []



function setup() {

  
  createCanvas(windowWidth, windowHeight);

  sliderX = createSlider(1, 100,20)
  sliderY = createSlider(1, 100,20)
 
  let index = 0

   for (let x = 0; x < numCols; x++) {
    for (let y = 0; y < numRows; y++) {
      vals[index] = 0;
      index++
    }
  }

  print(vals)

  // rectMode(CENTER);

  // noStroke()
}

let counter = 0
function draw() {


  background(220, 50);

  numCols = sliderX.value()
  numRows = sliderY.value()

  let index = 0

  for (let x = 0; x < numCols; x++) {
    for (let y = 0; y < numRows; y++) {

      if(mouseX > x * width / numCols && 
        mouseX < (x + 1) * width / numCols && 
        mouseY > y * height / numRows && 
        mouseY < (y + 1) *height / numRows) {

        vals[index] = 1;
  
      }

     

      if(vals[index] == 1){
        fill(255,0,0)
      }

      else {
        fill(255);
      }

      rect(x * width / numCols, y * height / numRows , (width / numCols), (height / numRows))


      // for(let z = 1; z<6; z++){
      
      
      // 
      // }


      index++
    }

  }


 
}

function mousePressed(){
  console.log(vals)
}
