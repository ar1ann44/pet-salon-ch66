//how to create an object
let student1 = {
    name: "Ariana",
    lastname: "Osuna",
    age: 19
};


// how to access to the atributes of an objects

student1.name
console.log(student1.name)

console.log(`Hello, my name is ${student1.name}, I am ${student1.age} years old`);

//1.Exercise: create 2 more student objects using the same structure.
//2.Create an array called students with strudent 1, strudent2, and strudent3.

let student2 = {
    name: "Robert",
    lastname: "Rife",
    age: 40
};

let student3 = {
    name: "Jesse",
    lastname: "Soto",
    age: 40
};

let students = [student1 , student2 , student3];

console.log(students)

//how to print seconds students name
students[1];
console.log(students[1]);

students[2].name 
console.log(students[2].name);

//constructor
function Student(studentName, studentLastname, studentEmail){
    this.name = studentLastname;
    this.lastname = studentLastname;
    this.email = studentEmail;
}

//create an object using the constructor
let strudent4 = Student("kate", "frantz", "kate.franzt@sdgku.edu");

