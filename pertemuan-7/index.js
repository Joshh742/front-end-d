// Deklarasi Object
// Object Literal
let john = {
  firstName: "John",
  age: 30,
  isMarried: true,
  grade: [80, 90, 100],
  address: {
    street: "Jl. Arnold Mononutu",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
  },
  sayGreetings: function () {
    console.log("Hello, my name is " + this.firstName);
  },
};

// Mengakses properti dalam object
// 1. Dot notation
console.log(john.firstName);
console.log(john.isMarried);
john.age = 31;
console.log(john.age);
john.job = "Teacher";
console.log(john.job);

// 2. Bracket notation
console.log(john["isMarried"]);
john["nationality"] = "Indonesia";

// 3. Object Method
john.sayGreetings();

// Delete property
delete john.grade;
console.log(john);

//JavaScript Conditional
//1. if - else

//Jika temperatur >= 37 tampilkan cuaca panas
//else tampilkan cuaca hari ini dingin

temp = 35;
if (temp >= 37) {
  console.log("Cuaca hari ini panas");
} else {
  console.log("Cuaca hari ini dingin");
}

//2. if - else  if - else
//Jika nilai 100 - 80 grade A
//Jika nilai 70 - 80 grade B
//Jika nilai 50 -70 grade C
//Jika nilai < 50 grade D

let nilai = 40;
if (nilai >= 80 && nilai <= 100) {
  console.log("grade A");
} else if (nilai >= 70 && nilai <= 80) {
  console.log("grade B");
} else if (nilai >= 50 && nilai <= 50) {
  console.log("grade C");
} else {
  console.log("grade D");
}

//1. Tampilkan januari
//2. Tampilkan febuari

let month = 6;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Febuari");
    break;
  case 3:
    console.log("Maret");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Not found");
    break;
}
