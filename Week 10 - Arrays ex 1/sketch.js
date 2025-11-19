let students = ["Michaelangelo","Juan","Sean", "Harvey","Zach", "Taylor", "Julian", "Kikey", "Jordan", "Aleksandr", "Erick", "Nigel", "Luca", "Anshula"]
let student

function setup(){
  createCanvas(windowWidth, windowHeight)
  textSize(40);
  textAlign(CENTER)
}

function draw(){
    background(255)

    text(student,width/2, height/2)

}

function mousePressed(){

    let index = floor(random(0, students.length));

    
    //student = students[index]
    
    student = students.splice(index, 2)

    console.log(students);

}