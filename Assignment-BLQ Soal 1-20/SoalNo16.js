// Kamu dan 3 temanmu makan-makan di restoran, dan kalian memesan beberapa menu yang
// nanti pembayarannya akan dibagi rata. Namun ada 1 orang yang alergi ikan, sehingga disepakati
// untuk 1 jenis makanan yang mengandung ikan itu hanya 3 orang yang akan membayar. Pajak
// 10% dari harga makanan dan service 5% dari harga makanan. Tentukan berapa yang harus
// dibayar oleh masing-masing temanmu (ingat ya ada 1 orang yang membayar lebih murah karena
// alergi).

var menu = [
    "1. Tuna Sandwich",
    "2. Spaghetti Carbonara",
    "3. Tea Pitcher",
    "4. Pizza",
    "5. Salad",
];
var hargaMenu = [42000, 50000, 30000, 70000, 30000];
var jumlahOrang = input.question("Jumlah orang yang makan: ");
var jumlahAlergi = input.question("Jumlah orang yang alergi makanan: ");
console.log("Menu yang dipesan: ", menu);
var indeksAlergi = input.question("Masukkan indeks menu alergi: ");
var pajak = 1.1;
var service = 1.05;
var totalHargaTanpaIkan = 0;
var totalHargaIkan = 0;
for (var i = 0; i < hargaMenu.length; i++) {
    //looping penjumlahan harga
    if (i != indeksAlergi - 1) {
        totalHargaTanpaIkan += hargaMenu[i];
    } else {
        totalHargaIkan += hargaMenu[i];
    }
}
//Pembagian bayar
var orangAlergi = Math.round(
    (totalHargaTanpaIkan * pajak * service) / jumlahOrang
);
var orangNormal = Math.round(
    (totalHargaIkan * pajak * service) / (jumlahOrang - jumlahAlergi) +
    orangAlergi
);

var totalHargaMakanan = totalHargaIkan + totalHargaTanpaIkan;
console.log("Tidak alergi membayar: ", orangNormal);
console.log("Alergi membayar: ", orangAlergi);

console.log(
    "Total harga makanan: ",
    Math.round(totalHargaMakanan * pajak * service)
);
