let students = ["Michaelangelo","Juan","Sean", "Harvey","Zach", "Taylor", "Julian", "Kikey", "Jordan", "Aleksandr", "Erick", "Nigel", "Luca", "Anshula"]
let student1
let student2

function setup(){
  createCanvas(windowWidth, windowHeight)
  textSize(40);
  textAlign(CENTER)
}

function draw(){
    background(255)

    text(student1 + " & " +  student2,width/2, height/2)

}

function mousePressed(){

    let index = floor(random(0, students.length));

    student1 = students.splice(index, 1)

    index = floor(random(0, students.length));

    student2 = students.splice(index,1)

    //student = students[index]
    

    console.log(students);

}