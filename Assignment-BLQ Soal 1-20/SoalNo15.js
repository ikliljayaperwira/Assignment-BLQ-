// Ubah format waktu &quot;03:40:44 PM&quot; menjadi format 24 jam (15:40:44)

var input =require('readline-sync')
var s = input.question('masukan jam anda = ')
var kalimat_per_array = s.split(':')
var jam= parseInt(kalimat_per_array[0])
var menit =  parseInt(kalimat_per_array[1])
var kalimat = s.substring(8)
var hasil = ''

if (kalimat ==='PM'){
    if (jam != 12){
        jam = jam+12
        hasil = jam+s.substring(2,8)
    }else {
        hasil =s.substring(0,8)
    }
}else if (kalimat === 'AM'){
    if (jam == 12 ){
        hasil ='00'+ s.substring(2,8)
    }else{
        hasil =s.substring(0,8)
    }
}
console.log(hasil)