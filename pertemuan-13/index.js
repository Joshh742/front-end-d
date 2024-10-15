//Rest Parameter & Spread Operator

//Rest Paramameter
//Digunakan pada saat kita membuat fungsi
//yg memiliki banyak parameter

//fungsi tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3, param4, param5);
};
func1("A", "B", "C", "D", "E");

//Fungsi dengan rest parameter
const func2 = (...params) => {
  console.log(params);
};
func2("A", "B", "C", "D", "E");

//rest parameter harus berada di terakhir dlm parameter

const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
};
func3("A", "B", "C", "D", "E");

//Mini Exercise
const penjumlahan = (...arr) => {
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5, 6));

//2. Spread Operator
//Digunakan pada Array dan Object, untuk memecah array/object
//menjadi element2 kecil pembentuknya

//array
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
console.log(...numbers);

//1. Duplikasi array
let numbers2 = [...numbers];
console.log(numbers2);

//2. menggabunkan array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let number3 = arr1.concat(arr2, arr3);
let number4 = [...arr1, ...arr2, ...arr3];
console.log(number3);

//
