let col, col1, col2;

function setup(){
 createCanvas(windowWidth,windowHeight); 
 background(0);
 noStroke();
 strokeWeight(10)
 noFill()



}

function draw(){


 col1 = color(100 + random(-10,10),200 + random(-10,10), 0 + random(-10,10));
 col2 = color(255+ random(-10,10), 10+ random(-10,10),50+ random(-10,10));

let i = map(mouseX,0,width,0,1)

 col = lerpColor(col1, col2,i)


 stroke(col);
 line(pmouseX, pmouseY,mouseX, mouseY);
 


}


