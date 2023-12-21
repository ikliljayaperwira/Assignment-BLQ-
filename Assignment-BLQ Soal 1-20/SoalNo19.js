// Tentukan apakah kalimat ini adalah Pangram* atau bukan

var input = require('readline-sync')
var s = input.question('masukan kalimat =  ')
var lower_case = "abcdefghijklmnopqrstuvwxyz"
var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var berurut = s.split('')
var i = 0
var j = 0
var hasil = 0
berurut = berurut.sort()

while (i < lower_case.length) {
    while (j < s.length) {
        if (s[j] == lower_case[i] || s[j] == upper_case[i]) {
            hasil = hasil + 1
            j = s.length
        }
        j = j + 1
    }
    i = i + 1
    j = 0
}
if (hasil >= lower_case.length) {
    console.log('pangram')
} else {
    console.log('not pangram')
}