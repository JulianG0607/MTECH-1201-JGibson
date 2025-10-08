let col, col1, col2;

let x = 400, y = 0;

function setup(){
 createCanvas(windowWidth,windowHeight); 
 col1 = color("#851400");
 col2 = color("#00e2f2");

 strokeWeight(3)
 //frameRate(4)

}

function draw(){

background(150)
ellipse(x, y, 50);

if(x > width){
  x=0;
}
if(y > height){
    y= 0
}

 //  x = x+1;
 //  y = y+1;
//  y++
 y+=5;
 x+=4;

}


