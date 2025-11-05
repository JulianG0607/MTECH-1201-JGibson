let col, col1, col2;

function setup(){
 createCanvas(windowWidth,windowHeight); 
 background(0);
 noStroke();
 strokeWeight(10)
 noFill()

 col1 = color("#851400");
 col2 = color("#00e2f2");

}

function draw(){


// let x = random(width);
// let y = random(height);

let x = mouseX+ random(50,-50)
let y = mouseY + random(-50,50);

let i = map(x,0,width,0,1)

 col = lerpColor(col1, col2,i)



 stroke(col);

 ellipse(x, y, 20);

}

function mousePressed(){
    background(0);   
    col1= color(random(255), random(255), random(255))
    col2= color(random(255), random(255), random(255))
}

function mouseDragged(){
//  stroke(col);
//  line(pmouseX, pmouseY,mouseX, mouseY);
}

function keyPressed(){
    background(255);  
}
