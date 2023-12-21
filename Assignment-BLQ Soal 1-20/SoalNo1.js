
// Andi memiliki sejumlah uang, dan dengan uang itu ia ingin membeli beberapa barang. Jika Andi
// ingin menggunakan uang itu semaksimal mungkin, buatlah sebuah kalkulasi jumlah maksimal
// uang yang bisa dipakai, dan berapa item barang yang bisa dibeli (jika jumlah uang yang dipakai
// sama, pilih kombinasi item terbanyak)


var uangAndi = input.questionInt("Masukkan uang Andi: ");
var hargaKacamata = [500, 600, 700, 800];
var hargaBaju = [200, 400, 350];
var hargaSepatu = [400, 350, 200, 300];
var hargaBuku = [100, 50, 150];

var kacamataTerpilih = 0;
var bajuTerpilih = 0;
var sepatuTerpilih = 0;
var bukuTerpilih = 0;
var uangTerpakai = 0;
var jumlahItem = 0;

for (var i = 0; i < hargaKacamata.length; i++) {
    if (uangAndi >= hargaKacamata[i]) {
        if (hargaKacamata[i] <= kacamataTerpilih || kacamataTerpilih === 0) {
            kacamataTerpilih = hargaKacamata[i];
        }
    }
}
if (uangAndi >= kacamataTerpilih && kacamataTerpilih !== 0) {
    uangAndi = uangAndi - kacamataTerpilih;
    jumlahItem += 1;
    uangTerpakai += kacamataTerpilih;
    console.log("cek jml item kacamata: ", jumlahItem);
    console.log("Masuk?");
}

for (var i = 0; i < hargaBaju.length; i++) {
    if (uangAndi >= hargaBaju[i] || bajuTerpilih === 0) {
        if (hargaBaju[i] < bajuTerpilih) {
            bajuTerpilih = hargaBaju[i];
        }
    }
}
if (uangAndi >= bajuTerpilih && bajuTerpilih !== 0) {
    uangAndi = uangAndi - bajuTerpilih;
    jumlahItem += 1;
    uangTerpakai += bajuTerpilih;
    console.log("cek jml item baju: ", jumlahItem);
}
for (var i = 0; i < hargaSepatu.length; i++) {
    if (uangAndi >= hargaSepatu[i] || sepatuTerpilih === 0) {
        if (hargaSepatu[i] < sepatuTerpilih) {
            sepatuTerpilih = hargaSepatu[i];
        }
    }
}
if (uangAndi >= sepatuTerpilih && sepatuTerpilih !== 0) {
    uangAndi = uangAndi - sepatuTerpilih;
    jumlahItem += 1;
    uangTerpakai += sepatuTerpilih;
    console.log("cek jml item sepatu: ", jumlahItem);
}
for (var i = 0; i < hargaBuku.length; i++) {
    if (uangAndi >= hargaBuku[i] || bukuTerpilih === 0) {
        if (uangAndi == hargaBuku[i]) {
            bukuTerpilih = hargaBuku[i];
            break;
        } else if (hargaBuku[i] < bukuTerpilih) {
            bukuTerpilih = hargaBuku[i];
        }
    }
}
if (uangAndi >= bukuTerpilih && bukuTerpilih !== 0) {
    uangAndi = uangAndi - bukuTerpilih;
    jumlahItem += 1;
    uangTerpakai += bukuTerpilih;
    console.log("cek jml item buku: ", jumlahItem);
}

console.log("Jumlah uang yang dipakai: ", uangTerpakai);
console.log("Sisa uang Andi: ", uangAndi);
console.log(
    `Jumlah item yg bisa dibeli:  ${jumlahItem} (kacamata: ${kacamataTerpilih}, baju: ${bajuTerpilih}, sepatu: ${sepatuTerpilih}, buku: ${bukuTerpilih})`
);