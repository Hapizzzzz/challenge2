// Deklarasikan variabel saldo dengan nilai awal
let saldo = 0;

// Fungsi untuk menambah saldo
function tambahSaldo() {
    const jumlahTambah = parseFloat(window.prompt('Masukkan jumlah saldo anda yang akan ditambah:', 0));
    if (!isNaN(jumlahTambah) && jumlahTambah >= 0) {
        saldo += jumlahTambah;
        alert(`Saldo baru: ${saldo}`);
    } else {
        alert('Masukkan jumlah saldo yang valid.');
    }
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo() {
    const jumlahKurang = parseFloat(window.prompt('Masukkan jumlah saldo anda yang akan dikurangi:', 0));
    if (!isNaN(jumlahKurang) && jumlahKurang >= 0 && jumlahKurang <= saldo) {
        saldo -= jumlahKurang;
        alert(`Saldo baru: ${saldo}`);
    } else {
        alert('Masukkan jumlah saldo yang valid.');
    }
}
