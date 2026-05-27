// Create array of 7 student objects
let students = [
    { name: "Aman", age: 20, course: "BCA", marks: 85 },
    { name: "Riya", age: 21, course: "BBA", marks: 88 },
    { name: "Rahul", age: 19, course: "BSc", marks: 75 },
    { name: "Neha", age: 22, course: "BA", marks: 82 },
    { name: "Vikas", age: 20, course: "BCom", marks: 78 },
    { name: "Pooja", age: 21, course: "BCA", marks: 90 },
    { name: "Karan", age: 23, course: "BTech", marks: 80 }
];

// Display keys of each student object
students.forEach((student, index) => {
    console.log("Student " + (index + 1) + " keys:");
    
    for (let key in student) {
        console.log(key);
    }
    
    console.log("-------------");
});