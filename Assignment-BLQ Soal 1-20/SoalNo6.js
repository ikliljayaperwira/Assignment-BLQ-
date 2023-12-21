//Tanpa menggunakan fungsi Reverse, buatlah fungsi untuk menentukan apakah sebuah kata adalah palindrome* atau tidak

var input = require('readline-sync')
var kalimat = input.question('masukan kata yang ingin  di cek = ')
var panjang_kalimat = kalimat.length
var i = 0
var sama = 0
while (i < kalimat.length) {

    if (kalimat[i] != kalimat[panjang_kalimat - 1]) {
        console.log('bukan palindrom')
        i = kalimat.length
    } else {
        sama = sama + 1
    }
    i = i + 1
    panjang_kalimat = panjang_kalimat - 1
    if (sama === kalimat.length) {
        console.log('polindrom')
    }
}