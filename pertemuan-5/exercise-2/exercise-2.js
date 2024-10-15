//Ubah exercise 1 ttg BMI
//dengan menggunakan :

//1. IIFE
let bmi = (function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
})(50, 1.70);

console.log("BMI saya : " + bmi);

//2. Callback
(function(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
})(50, 1.70, function(bmi) {
    console.log("BMI saya : " + bmi);
});