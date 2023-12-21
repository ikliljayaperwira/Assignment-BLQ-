// Hattori sedang berlatih untuk menjadi ninja yang baik dengan berlari melewati gunung dan
// lembah. Yang didefinisikan sebagai gunung dan lembah adalah:

var input = require('readline-sync')
var kalimat = input.question('masukan jalur = ')
var jalur = kalimat.split(' ')
var gunung = 0;
var lembah = 0;
var i = 0
var point = 0
var kata = ''

while (i < jalur.length) {

    if (jalur[i] === 'N' & kata === '') {
        kata = 'gunung'
    }

    if (jalur[i] === 'T' & kata === '') {
        kata = 'lembah'
    }

    if (kata === 'gunung') {

        if (jalur[i] === "N") {
            point = point + 1
        } else {
            point = point - 1
        }
    }
    if (kata === 'lembah') {

        if (jalur[i] === "N") {
            point = point + 1
        } else {
            point = point - 1
        }
    }
    if (point === 0 & kata === 'gunung') {
        gunung = gunung + 1
        kata = ''
    }
    if (point === 0 & kata === 'lembah') {
        lembah = lembah + 1
        kata = ''
    }
    i = i + 1
}
console.log('gunung = ', gunung, 'lembah = ', lembah);
