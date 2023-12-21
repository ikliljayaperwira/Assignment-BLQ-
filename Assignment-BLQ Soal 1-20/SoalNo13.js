// Berapa derajat sudut terkecil yang dibentuk 2 jarum jam?
var input = require('readline-sync')
var jam = input.questionInt("Masukkan Jam: ");
var menit = input.questionInt("Masukkan Menit: ");

if (jam < 0 || jam > 12 || menit < 0 || menit >= 60) {
    console.log("Input yang anda masukkan salah, silahkan periksa kembali");
} else {
    // Hitung sudut
    var sudut = Math.abs(30 * jam - (11 / 2) * menit);

    // Pastikan sudut tidak lebih dari 180 derajat
    Math.min(sudut, 360 - sudut);
}
console.log("Sudut saat ini: ", sudut);
