//Buatlah fungsi untuk menampilkan n bilangan prima pertama
var input =require('readline-sync')
var nilai_input = input.questionInt('masukan nilai = ')
var i = 2
var j = 2
var nilai = 0
var hasil = ''
while(i<nilai_input){
    nilai = 0
    while(j<i){
        if(i%j == 0){
            nilai = 1
            break
        }
        j=j+1
    }
    if(nilai == 0 && i == 2){
        hasil = i
    }
    if(nilai == 0 && i >2){
        hasil=hasil+','+i
    }
    j=2
    i=i+1
}
console.log(hasil)
