// N = 3  3 6 9
// N = 4  4 8 12 16
// N = 5  5 10 15 20 25

var input =require('readline-sync')
var jumlah_N=input.questionInt('masukan jumlah N = ')
var jumlah = 0
var hasil = '[]'
var i = 0 
while (i<jumlah_N) {
    jumlah=jumlah+jumlah_N
    hasil=hasil+' '+jumlah
    i=i+1
}
console.log(hasil)