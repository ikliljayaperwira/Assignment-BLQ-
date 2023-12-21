
// var A = ["G", "G", "G"];
// var B = ["B", "B", "B"];
var jarakAwal = input.questionInt("Masukkan jarak awal: ")
var AJalan = 0;
var BJalan = jarakAwal;

var lanjutMain = "y"
while (lanjutMain === "y") {

    console.log("INPUT HURUF G (GUNTING), K (KERTAS), B (BATU)")
    var A = input.question("Suit A: ")
    var B = input.question("Suit B: ")


    for (var i = 0; i < A.length; i++) {
        if (A[i] === "G" && B[i] === "K") {
            AJalan += 2;
            BJalan += 1;
        } else if (A[i] === "G" && B[i] === "B") {
            AJalan -= 1;
            BJalan -= 2;
        } else if (A[i] === "K" && B[i] === "B") {
            AJalan += 2;
            BJalan += 1;
        } else if (A[i] === "K" && B[i] === "G") {
            AJalan -= 1;
            BJalan -= 2;
        } else if (A[i] === "B" && B[i] === "G") {
            AJalan += 2;
            BJalan += 1;
        } else if (A[i] === "B" && B[i] === "K") {
            AJalan -= 1;
            BJalan -= 2;
        }
    }
    console.log("Jalan A saat ini: ", AJalan)
    console.log("Jalan B saat ini: ", BJalan)
    if (AJalan === BJalan) {
        if (AJalan < 0 && BJalan < 0) {
            console.log("B Menang")
            break;
        } else {
            console.log("A Menang")
            break;
        }
    }
    lanjutMain = input.question("Lanjut main? (y / n)")
}
