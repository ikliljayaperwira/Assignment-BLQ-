// Input: Afrika
// Output:
// ***a***
// ***k***
// ***i***
// ***r***
// ***f***
// ***A***
// Input: Jeruk
// Output:
// **k**
// **u**
// **r**
// **e**
// **J**

var input =require('readline-sync')

var kalimat = input.question('masukan kalimat yang di gunakan = ')
var bagi =Math.floor( kalimat.length /2)
var i=kalimat.length
var j=0
var hasil = kalimat[i-1]
var bintang = ''
while(i>0){
    while (j<bagi) {
        bintang=bintang+'*'
        j=j+1
    }
console.log(bintang+hasil+bintang)
i=i-1
hasil = kalimat[i-1]
}