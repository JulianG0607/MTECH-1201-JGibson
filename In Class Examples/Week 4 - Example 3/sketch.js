let col, col1, col2;
let x = 100, y = 100;

let diameter = 100;

let xV = 8, yV = 6; //speed in the x and y directions

function setup(){
 createCanvas(windowWidth,windowHeight); 
 col1 = color("#851400");
 col2 = color("#00e2f2");

 strokeWeight(3)
 //frameRate(4)

}

function draw(){

//background(150)
ellipse(x, y, diameter);

if(x > width - diameter/2){
  xV = -xV;
}
if (x < diameter/2){
  xV = -xV;
}
if(y > height - diameter/2){
    yV = -yV;
}
if(y<diameter/2){
  yV =- yV;
}



 //  x = x+1;
 //  y = y+1;
//  y++

 x+= xV + random(-5,5);
 y+= yV + random(-5,5);

//  print("xV = ", xV);

}


