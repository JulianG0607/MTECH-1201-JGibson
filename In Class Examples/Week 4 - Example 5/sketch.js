let col, col1, col2, col3;
let x = 100, y = 100;

let r = 0;

let diameter = 100;

let xV = 8, yV = 6; //speed in the x and y directions

function setup(){
 createCanvas(windowWidth,windowHeight); 
 col1 = color("#851400");
 col2 = color("#00e2f2");
 col3 = color('purple');


noStroke() //frameRate(4)

}

function draw(){

  background(0)
  //fill(col2)
  
  
 
  

background(255,50)
let i = map(x, 0,width, 0,1)
let j = map(y, 0, height, 0,1);

col =  lerpColor(col1, col2, i) 
col = lerpColor(col, col3,j)
fill(col)

push()
  translate(x,y)
  ellipse(0,0,diameter)
  rotate(r)
  translate(100,0)
  ellipse(0,0,25)
 pop()

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

// col = color(255- col.v1, 255- col.v2, 255- col.c3) 
// fill(col)


 //  x = x+1;
 //  y = y+1;
//  y++

 x+= xV 
 y+= yV 

 r +=0.1
//  print("xV = ", xV);

}

function mousePressed(){

  col1 = color(random(255),random(255),random(255))
  col2 = color(random(255),random(255),random(255))
  col3 = color(random(255),random(255),random(255))


}


