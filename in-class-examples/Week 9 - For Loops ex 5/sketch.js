let num = 100;
let slider

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(1, 200)

  textSize(25)
}

function draw() {
  background(220,50);
 
  num = slider.value()
  
  

  for(let i = 0; i<num; i++){
    rect(random(width), random(height), random(100)) 
  }
  text('number of rects spawned per frame: ' + num,50,50)
  
  // rect(random(width), random(height), random(100)) 
  // rect(random(width), random(height), random(100)) 
  // rect(random(width), random(height), random(100)) 
  // rect(random(width), random(height), random(100)) 
  // rect(random(width), random(height), random(100)) 
  // rect(random(width), random(height), random(100)) 
  // rect(random(width), random(height), random(100)) 
  // rect(random(width), random(height), random(100)) 
  // rect(random(width), random(height), random(100)) 
  // rect(random(width), random(height), random(100)) 


}
