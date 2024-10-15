//JavaScript Array
//Deklarasi Array

// //Cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// //Cara 2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

// //Tipe data yang bisa di simpan di dalam array
// let numbers = [1, 2, 3, 4, 5]; //number
// let student = ["John", "Jane", "Bob"]; //string
// let John = ["John", 30, true, [80, 90, 100]]; //mixed

// //Array lenght
// console.log(numbers.length);
// console.log(student.length);
// console.log(John.length);

// //Mengakses element tertentu di dalam array
// console.log(numbers[3]);
// console.log(John[2]);
// console.log(John[3][1]);

// //Mengakses elemen terakhir
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers2[numbers2.length - 1]);

//Array method
let array = [1, 2, 3, "hallo", false, true];
console.log(array);

//1. toString()
console.log(array.toString());
//2. Join
console.log(array.join(" "));
//3. Pop()
array.pop();
console.log(array);
//4. Push()
array.push("Selamat Pagi");
console.log(array);
//5. shift()
array.shift();
console.log(array); //hapus index pertama
//6. unshift()
array.unshift();
console.log(array); //tambah di index pertama
//7. spilice
array.splice(3, 1);
console.log(array);
array.splice(3, 0, 4, 5);
console.log(array);
//8. concat()
let buah = ["pisang", "aperl"];
//9. slice()
