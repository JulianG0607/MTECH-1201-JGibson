//let col;

function setup(){
 createCanvas(windowWidth,windowHeight); 

}

function draw(){
 background(0);

 let r = map(mouseX, 0,width, 0,255);
 let b = map(mouseX, 0,width,255,0);
 let col = color(r, 0, b);

 console.log(r);

 fill(col);
 ellipse(mouseX, mouseY, 150);

}