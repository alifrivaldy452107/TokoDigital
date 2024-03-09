// script.js

// Simpan data keranjang belanja di localStorage
function tambahKeKeranjang(product) {
    let keranjangBelanja = JSON.parse(localStorage.getItem('keranjangBelanja')) || [];
    keranjangBelanja.push(product);
    localStorage.setItem('keranjangBelanja', JSON.stringify(keranjangBelanja));

    // Tampilkan pesan atau lakukan aksi lainnya setelah menambahkan ke keranjang
    alert('Produk ditambahkan ke keranjang belanja!');
}
git add script.js
git commit -m "Menambahkan file script.js dengan fungsi tambah ke keranjang belanja"
git push origin master
