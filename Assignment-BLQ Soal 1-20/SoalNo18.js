// Donna sangat menyukai kue, tetapi ia ingin badannya tetap bagus sehingga setiap Donna
// memakan kue dengan n kalori, ia perlu berolahraga selama 0.1 x n x j menit, dengan j adalah
// selisih waktu dari ia memakan kue dan berolahraga (dalam satuan jam). Agar tetap terhidrasi,

// Donna akan meminum 100 cc air setiap 30 menit berolahraga, dan 500 cc di akhir olahraga.
// Berikut ini adalah jam makan dan kalori dari kue yang dimakan Donna hari ini

var jam = [9, 13, 15, 17];
var n = [30, 20, 50, 80];
var WO = 18
var j = 0
var menitOlahraga = 0
var donnaMinum = 0

for (var i = 0; i < jam.length; i++) {
    j = WO - jam[i]
    menitOlahraga = menitOlahraga + (0.1 * n[i] * j)
}
console.log("Total menit olahraga: ", menitOlahraga)
donnaMinum = (Math.floor(menitOlahraga / 30) * 100) + 500
console.log("Total Donna minum: ", donnaMinum, "cc")
