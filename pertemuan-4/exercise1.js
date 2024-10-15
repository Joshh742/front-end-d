// Function to calculate BMI
function hitungBMI(berat, tinggi) {
    // Validate inputs
    if (isNaN(berat), berat <= 0, isNaN(tinggi), tinggi <= 0) {
        return "Masukkan input yang benar!";
    }

    // Convert height from centimeters to meters
    let tinggiMeter = tinggi / 100;

    // Calculate BMI
    let BMI = berat / (tinggiMeter * tinggiMeter);

    // Round BMI to one decimal place
    BMI = BMI.toFixed(1);

    return BMI;
}

// Example usage
let berat = -3;
let tinggi = 176;
let BMI = hitungBMI(berat, tinggi);
console.log("Hasil BMI:", BMI);
