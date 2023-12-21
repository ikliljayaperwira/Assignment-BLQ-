// Input 
// Susilo Bambang Yudhoyono

// Output
// S***o B***g Y***o

// Input 
// Rani Tiara 

// Output
// R***i T***a

var input =require('readline-sync')
var kalimat_input =input.question('masukan kalimat : ')
var kalimat_arrays = kalimat_input.split(' ')
var panjang_array_kalimat = kalimat_arrays.length
var panjang_array_perkata = 0
var i = 0
var j = 0
var hasil = ''
while(i< panjang_array_kalimat){
    panjang_array_perkata = kalimat_arrays[i].length
    while (j<panjang_array_perkata){
        if(j==0 || j+1== panjang_array_perkata){
            hasil=hasil+kalimat_arrays[i].charAt(j)
        }else{
            hasil=hasil+'*'
        }
        j = j+1
    }
    hasil=hasil+' '
    i=i+1
    j=0
}
console.log(hasil)