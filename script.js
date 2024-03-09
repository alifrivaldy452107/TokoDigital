// script.js

document.addEventListener('DOMContentLoaded', () => {
    tampilkanProduk();
    updateKeranjangDisplay();
});

function tampilkanProduk() {
    const produkContainer = document.getElementById('produk-container');
    const produkData = [
        { id: 1, nama: 'Produk Satu', harga: 50 },
        // Tambahkan produk lain jika diperlukan
    ];

    produkData.forEach((produk) => {
        const produkElement = document.createElement('div');
        produkElement.classList.add('produk');

        produkElement.innerHTML = `
            <img src="gambar_produk_${produk.id}.jpg" alt="${produk.nama}">
            <h2>${produk.nama}</h2>
            <p>Harga: $${produk.harga}</p>
            <button onclick="tambahKeKeranjang(${produk.id})" class="button">Tambahkan ke Keranjang</button>
        `;

        produkContainer.appendChild(produkElement);
    });
}

function tambahKeKeranjang(productId) {
    let keranjangBelanja = JSON.parse(localStorage.getItem('keranjangBelanja')) || [];
    const existingProduct = keranjangBelanja.find(product => product.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        keranjangBelanja.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('keranjangBelanja', JSON.stringify(keranjangBelanja));
    updateKeranjangDisplay();
    alert('Produk ditambahkan ke keranjang belanja!');
}

function updateKeranjangDisplay() {
    const keranjangBelanja = JSON.parse(localStorage.getItem('keranjangBelanja')) || [];
    const totalItems = keranjangBelanja.reduce((total, product) => total + product.quantity, 0);

    const keranjangDisplay = document.getElementById('keranjang-display');
    keranjangDisplay.textContent = `Keranjang Belanja (${totalItems} item)`;
}
