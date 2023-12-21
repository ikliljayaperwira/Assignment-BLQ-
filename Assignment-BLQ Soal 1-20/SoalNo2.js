
// Di perpustakaan, anda bias meminjam buku selama beberapa hari, durasinya berbeda-beda
// setiap buku tergantung dari konten buku tersebut. Jika terlambat mengembalikan, maka akan
// dikenakan denda sebesar 100/hari.
// Berikut adalah contoh buku yang dipinjam seorang anggota perpustakaan

var namaBuku = ["A", "B", "C", "D"];
var durasiPinjam = [14, 3, 7, 7];
var dendaTerlambat = 100; // per hari

console.log("a. (28 Februari - 7 Maret)");

var hariA = 8;
var hitungCaseA = 0;
var dendaBukuCaseA = [];
for (var i = 0; i < durasiPinjam.length; i++) {
    if (durasiPinjam[i] < hariA) {
        hitungCaseA = Number((hariA - durasiPinjam[i]) * dendaTerlambat);
        dendaBukuCaseA.push(hitungCaseA);
    }
    console.log(`Denda buku ${namaBuku[i]} : Rp. ${hitungCaseA} `);
}

console.log("\nb. (29 April - 30 Mei)");
var hariB = 31;
var hitungCaseB = 0;
var dendaBukuCaseB = [];
for (var i = 0; i < durasiPinjam.length; i++) {
    if (durasiPinjam[i] < hariB) {
        hitungCaseB = Number((hariB - durasiPinjam[i]) * dendaTerlambat);
        dendaBukuCaseB.push(hitungCaseB);
    }
    console.log(`Denda buku ${namaBuku[i]} : Rp. ${hitungCaseB} `);
}
