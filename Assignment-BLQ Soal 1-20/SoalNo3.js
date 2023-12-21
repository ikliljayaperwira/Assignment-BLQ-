// Buatlah fungsi untuk kalkulasi tarif parkir berikut

var masuk = new Date(" 27 Januari 2019 05:00:01")
var keluar = new Date(" 27 Januari 2019 17:45:03")
var detik = ((keluar.getTime() - masuk.getTime()) / (1000))
var menit = Math.floor(detik / 60)
var jam = Math.floor(menit / 60)
var sisa = detik - (menit * 60)
var ulang = 0
var i = 1
var harga = 0
var flate = 'false'
while (ulang < 4) {
    if (ulang == 1) {
        var masuk = new Date(" 27 Januari 2019 05:00:01")
        var keluar = new Date(" 27 Januari 2019 17:45:03")
    } else if (ulang == 2) {
        var masuk = new Date(" 27 Januari 2019 07:03:59")
        var keluar = new Date(" 27 Januari 2019 15:30:06")
    } else if (ulang == 3) {
        var masuk = new Date(" 27 Januari 2019 07:05:00")
        var keluar = new Date(" 28 Januari 2019 00:20:21")
    } else if (ulang == 4) {
        var masuk = new Date(" 27 Januari 2019 11:14:23")
        var keluar = new Date(" 27 Januari 2019 13:20:00")
    }
    while (i <= jam) {
        if (i <= 8) {
            harga = harga + 1000
        }
        if (i <= 24 & i > 8 & flate == 'false') {
            harga = harga + 8000
            flate = 'true'
        }
        if (i >= 25 & i > 24 & i > 8) {
            harga = harga + 1000
        }
        i = i + 1
    }

    if (i >= 24 & sisa > 0) {
        harga = harga + 15000
    }
    if (i <= 8 & sisa > 0) {
        harga = harga + 1000
    }
    if (i >= 24 & i > 8 & sisa > 0) {
        harga = harga + 1000
    }
    console.log('soal ke ', ulang + 1, ' = ', harga)
    ulang=ulang+1
    flate = 'false'
    harga = 0
    i=0
}

