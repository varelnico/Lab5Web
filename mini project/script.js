function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) {
        return "A";
    } else if (nilai >= 75) {
        return "B";
    } else if (nilai >= 60) {
        return "C";
    } else if (nilai >= 50) {
        return "D";
    } else {
        return "E";
    }
}

function hitung() {

    let tugas = Number(document.getElementById("tugas").value);
    let uts = Number(document.getElementById("uts").value);
    let uas = Number(document.getElementById("uas").value);

    if (tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100) {

        document.getElementById("hasil").innerHTML =
            "Nilai harus 0 sampai 100";

        return;
    }

    let nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    let predikat = tentukanPredikat(nilaiAkhir);

    let status;

    if (nilaiAkhir >= 60) {
        status = "Lulus";
    } else {
        status = "Belum Lulus";
    }

    document.getElementById("hasil").innerHTML =
        "Nilai Akhir: " + nilaiAkhir.toFixed(2) + "<br>" +
        "Predikat: " + predikat + "<br>" +
        "Status: " + status;
}