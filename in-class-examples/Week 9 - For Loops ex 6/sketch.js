let num = 100;
let slider

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(1, 100)

  //rectMode(CENTER)
  textSize(25)
}

function draw() {
  background(220,50);
 
  num = slider.value()
  
  

  for(let i = 0; i<num; i++){
    rect(i*10, height/2, 10)
  }
  


}
