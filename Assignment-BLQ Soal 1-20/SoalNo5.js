//Buatlah fungsi untuk menampilkan n bilangan Fibonacci pertama

var input = require('readline-sync')
var jumlah_n = input.questionInt('masukan jumla inputan = ')
var i = 1
var nilai_1 = 0
var nilai_2 = 1
var penjumlahan = 0
var hasil = ''
while (i <= jumlah_n) {
    penjumlahan = nilai_1 + nilai_2
    hasil = hasil + nilai_1 + ' '
    nilai_1 = nilai_2
    nilai_2 = penjumlahan
    i = i + 1
}
console.log(hasil)