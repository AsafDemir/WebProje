// İlan verileri
const ilanlar = [
    { id: 1, baslik: "Daire 1", fiyat: 300000, metrekare: 120, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 2, baslik: "Daire 2", fiyat: 250000, metrekare: 90, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 3, baslik: "Daire 3", fiyat: 200000, metrekare: 65, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 4, baslik: "Daire 4", fiyat: 400000, metrekare: 140, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 5, baslik: "Daire 5", fiyat: 350000, metrekare: 125, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 6, baslik: "Daire 6", fiyat: 275000, metrekare: 110, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 7, baslik: "Daire 7", fiyat: 180000, metrekare: 70, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 8, baslik: "Daire 8", fiyat: 320000, metrekare: 115, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 9, baslik: "Daire 9", fiyat: 500000, metrekare: 135, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 10, baslik: "Daire 10", fiyat: 290000, metrekare: 95, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 11, baslik: "Daire 11", fiyat: 360000, metrekare: 125, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 12, baslik: "Daire 12", fiyat: 150000, metrekare: 60, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 13, baslik: "Daire 13", fiyat: 340000, metrekare: 130, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 14, baslik: "Daire 14", fiyat: 220000, metrekare: 85, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 15, baslik: "Daire 15", fiyat: 170000, metrekare: 75, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 16, baslik: "Daire 16", fiyat: 550000, metrekare: 145, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 17, baslik: "Daire 17", fiyat: 240000, metrekare: 90, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 18, baslik: "Daire 18", fiyat: 320000, metrekare: 120, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 19, baslik: "Daire 19", fiyat: 210000, metrekare: 80, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
    { id: 20, baslik: "Daire 20", fiyat: 375000, metrekare: 130, resim: "evinizi-sattiracak-fotograflar-icin-10-ipucu.jpg" },
];


// İlanları HTML’e ekleme fonksiyonu
function ilanlariGoster(filteredIlanlar) {
    const ilanContainer = document.getElementById("ilan-container");
    ilanContainer.innerHTML = ""; // Mevcut ilanları temizle

    // Gelen ilanları göster
    filteredIlanlar.forEach(ilan => {
        ilanContainer.innerHTML += `
            <div class="ilan-card">
                <img src="${ilan.resim}" alt="${ilan.baslik}">
                <h3>${ilan.baslik}</h3>
                <p>${ilan.metrekare} m², Fiyat: ${ilan.fiyat} TL</p>
            </div>
        `;
    });
}


// İlk başta tüm ilanları göster
ilanlariGoster(ilanlar);


// Filtreleme ve Sıralama İşlevi
function filtrele() {
    const fiyatFiltre = document.getElementById("fiyat").value;
    const metrekareFiltre = document.getElementById("metrekare").value;
    const minFiyat = parseInt(document.getElementById("minFiyat").value) || 0;
    const maxFiyat = parseInt(document.getElementById("maxFiyat").value) || Infinity;
    const minMetrekare = parseInt(document.getElementById("minMetrekare").value) || 0;
    const maxMetrekare = parseInt(document.getElementById("maxMetrekare").value) || Infinity;

    // Fiyat sıralaması
    let sortedIlanlar = [...ilanlar];
    if (fiyatFiltre === "artan") {
        sortedIlanlar.sort((a, b) => a.fiyat - b.fiyat);
    } else if (fiyatFiltre === "azalan") {
        sortedIlanlar.sort((a, b) => b.fiyat - a.fiyat);
    }

    // Metrekare sıralaması
    if (metrekareFiltre === "artan") {
        sortedIlanlar.sort((a, b) => a.metrekare - b.metrekare);
    } else if (metrekareFiltre === "azalan") {
        sortedIlanlar.sort((a, b) => b.metrekare - a.metrekare);
    }

    // Fiyat ve Metrekare aralığına göre filtreleme
    const filteredIlanlar = sortedIlanlar.filter(ilan => {
        return ilan.fiyat >= minFiyat && ilan.fiyat <= maxFiyat &&
               ilan.metrekare >= minMetrekare && ilan.metrekare <= maxMetrekare;
    });

    // Filtrelenmiş ilanları göster
    ilanlariGoster(filteredIlanlar);
}