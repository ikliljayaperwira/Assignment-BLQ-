
// Tentukan mean, median, dan modus dari deret berikut. Jika ada lebih dari 2 modus, ambil angka
// yang nilainya paling kecil

var deretData = [8, 7, 0, 2, 7, 1, 7, 6, 3, 0, 7, 1, 3, 4, 6, 1, 6, 4, 3];
deretData.sort(function (a, b) {
    return a - b;
});
console.log(deretData);
var mean = 0;
var median = 0;
var modus = 0;
var sum = 0;
var jumlah = 1;
var tampung = 0;

for (var i = 0; i < deretData.length; i++) {
    sum += deretData[i];
    if (deretData[i] == deretData[i + 1]) {
        jumlah += 1;
        modus = deretData[i];
    } else {
        jumlah = 1;
    }
}
var n = deretData.length;
if (n % 2 != 0) {
    median = deretData[Math.floor(n / 2)];
} else {
    median = (deretData[n / 2] + deretData[n / 2 - 1]) / 2;
}
mean = sum / deretData.length;
console.log("Ini mean: ", mean);
console.log("Ini modus: ", modus);
console.log("Ini median: ", median);
