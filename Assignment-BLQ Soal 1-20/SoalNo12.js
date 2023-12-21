// Input: 1 2 1 3 4 7 1 1 5 6 1 8
// Output: 1 1 1 1 1 2 3 4 5 6 7 8
// *selesaikan dengan TIDAK menggunakan fungsi Sort

var input =require('readline-sync')
angka = input.question('masukan angka yang ingin di sorting = ')
var array_input=angka.split(',')
var ulang = array_input.length
var i = 0
var j = 1
var ceck=parseInt(array_input[0])
var array_hasil=''
var tempat_terkecil = 0
while (i<ulang) {
    while (j<ulang) {
        if (ceck>parseInt(array_input[j])) {
            ceck= parseInt(array_input[j])
            tempat_terkecil=j
        }
        j=j+1
    }
    array_hasil=array_hasil+ceck+' '
    array_input.splice(tempat_terkecil,1)
    i=i+1
    j=1
    ceck=parseInt(array_input[0])
    tempat_terkecil=0
}
console.log(array_hasil)