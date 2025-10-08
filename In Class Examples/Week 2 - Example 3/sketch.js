
// OferS

// "weird drawing tool"
// i was just playing around 


function setup(){

    createCanvas(windowWidth, windowHeight)
    // background(100);
    
    // noStroke();
    // strokeWeight(5)
  //frameRate(2)

}

function draw(){

    background(100,50);


    stroke(0,0,255)
    line(0,0, mouseX, mouseY )
    noStroke();
    ellipse(mouseX, mouseY, 50,20)

    console.log(mouseX, mouseY);
    

}