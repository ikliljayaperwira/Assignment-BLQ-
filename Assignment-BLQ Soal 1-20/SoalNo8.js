
// Tentukan nilai minimal dan maksimal dari penjumlahan 4 komponen deret ini

var angka = [1, 2, 4, 7, 8, 6, 9];
var deret = 4;
var min = 0;
var max = 0;

for (var i = 0; i < angka.length; i++) {
    if (i <= deret - 1) {
        min += angka[i];
    }
    if (i >= deret - 1 && i < deret * 2 - 1) {
        max += angka[i];
    }
}
console.log("Nilai Minimal: ", min);
console.log("Nilai Maksimal: ", max);
