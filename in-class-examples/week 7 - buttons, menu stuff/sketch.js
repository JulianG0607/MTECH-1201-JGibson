
let col, col1, col2;
let button1, button2

let funcSelect = 0

let x = 100, y = 100;

let diameter = 100;
let xV = 4, yV = 2; //speed in the x and y directions


function setup() {

    button1 = createButton('scene 1')
    button1.position(100, 20);
    button1.size(100, 30)

    button2 = createButton('scene 2')
    button2.position(210, 20);
    button2.size(100, 30)


    button1.mousePressed(select1)
    button2.mousePressed(select2)
    createCanvas(windowWidth, windowHeight);

}

function draw() {

    if (funcSelect === 1) {
        let i = map(mouseX, 0, width, 0, 1)
        col = lerpColor(col1, col2, i)
        stroke(col);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

    if (funcSelect === 2) {
        ellipse(x, y, diameter);

        if (x > width - diameter / 2) {
            xV = -xV;
        }
        if (x < diameter / 2) {
            xV = -xV;
        } if (y > height - diameter / 2) {
            yV = -yV;
        }
        if (y < diameter / 2) {
            yV = - yV;
        }

        x += xV + random(-5, 5);
        y += yV + random(-5, 5);
    }
}



    //  print('?')





function select1() {

    strokeWeight(10)
    background(0)
    col1 = color("#851400");
    col2 = color("#00e2f2");

    funcSelect = 1;
    // print('?')

}

function select2() {

    strokeWeight(10)
    background(0)


    funcSelect = 2;
    // print('?')

}

