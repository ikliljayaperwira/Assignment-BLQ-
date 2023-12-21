// Deret: 3 9 0 7 1 2 4
// N = 3  7 1 2 4 3 9 0
// N = 1  9 0 7 1 2 4 1

var input =require('readline-sync')
var N = input.questionInt('masukan jumlah N = ')
var angka = input.question('masukan array =  ')
var arry = angka.split(',')
var i = 0 
var tampung = 0
while (i<N) {
    tampung= arry[0]
    arry.shift()
    arry.push(tampung)
    i=i+1
}
console.log(arry)