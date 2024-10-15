//JavaScript Loop
//1. for - loop

// Array Object
let students = [
  {
    id: 1,
    firstName: "John",
    grade: 80,
  },
  {
    id: 2,
    firstName: "Jane",
    gradegrade: 90,
  },
  {
    id: 3,
    firsName: "Bob",
    grade: 100,
  },
];
// // console.log(students);
// // for (let i = 0; i < students.length; i++) {
// //   console.log(students[1]);
// // }

// //2. while-loop
// let i = 0;
// while (i < students.lenght) {
//   console.log(students[i]);
// }

// //3.do
// let 1 = 0;
// do {
//     console.log(students[i]);
//     i++;
// }while (i<students.length);
//
//1. forEach()
// students.forEach(function (item) {
//   console.log(item);
// });

//2. map()
let output = students.map(function (item) {
  return item;
});
console.log(output);

//3. filter()
students.filter(function (item) {
  return item.grade >= 90;
});

//4. find()
let outputFind = students.find(function (item) {
  return item.grade >= 90;
});
console.log(outputFind);

//5. findIndex()
let index = students.findIndex;
