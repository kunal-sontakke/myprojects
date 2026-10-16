const students = [
  { name: "Ravi", marks: 80 },
  { name: "Neha", marks: 90 },
  { name: "Amit", marks: 70 }
];
let totalmarks = students.reduce((accumulator , score) =>{
    return accumulator + score.marks;
},0);
console.log(totalmarks);