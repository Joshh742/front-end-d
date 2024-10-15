//IIFE dan Callback
//1. IIFE (Immediatelly Invoked Fucntion Expression)-Fungsi yang di panggil secara langsung

// (function() {
//     console.log("Hello World");
// })();
// // With params & args & retrun value
// let Output = (function (fullName) {
//     return "Hello" + fullName;
// })("John Doe");
// console.log(Output)

//2. Callback
// No params & args & return value
function sayHello(callback) {
    callback();
}

sayHello(function () {
    console.log("Hello World");
});

// With params
function sayHello(callback) {
    let output = callback("John Doe");
    return output;
}

let output = sayHello(function (fullName) {
    return "Hello" + fullName;
});
console.log(output);