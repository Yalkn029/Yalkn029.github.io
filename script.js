// 1. Proje Verileri
const projelistesi = [
    // 🌐 WEB
    { id: 1, baslik: "E-Ticaret Sitesi", kategori: "web", detay: "Online alışveriş platformu.", resim: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
    { id: 2, baslik: "Proje Yönetim Paneli", kategori: "web", detay: "Görev yönetim sistemi.", resim: "https://images.unsplash.com/photo-1551434678-e076c223a692" },
    { id: 3, baslik: "AI Yazı Oluşturucu", kategori: "web", detay: "Yapay zeka metin üretimi.", resim: "https://images.unsplash.com/photo-1677442136019-21780ecad995" },
    { id: 4, baslik: "Online Eğitim", kategori: "web", detay: "Video ders platformu.", resim: "https://images.unsplash.com/photo-1584697964154-6dbe3f1a06c7" },
    { id: 5, baslik: "Hava Durumu", kategori: "web", detay: "API ile canlı veri.", resim: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b" },

    // 📱 MOBİL
    { id: 6, baslik: "Fitness Takip", kategori: "mobil", detay: "Adım ve kalori.", resim: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" },
    { id: 7, baslik: "Not Defteri", kategori: "mobil", detay: "Not alma uygulaması.", resim: "https://images.unsplash.com/photo-1517842645767-c639042777db" },
    { id: 8, baslik: "Navigasyon", kategori: "mobil", detay: "Harita sistemi.", resim: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd" },
    { id: 9, baslik: "Alışkanlık Takip", kategori: "mobil", detay: "Günlük hedefler.", resim: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b" },
    { id: 10, baslik: "Bütçe Takip", kategori: "mobil", detay: "Gelir-gider analizi.", resim: "https://images.unsplash.com/photo-1565372910946-3c4bfa9b6b0f" }
];

// 2. Listeleme
function projelerigoster(liste) {
    const projediv = document.getElementById("proje-listesi");
    projediv.innerHTML = "";

    liste.forEach(proje => {
        const kart = document.createElement("div");
        kart.className = "proje-karti";

        kart.innerHTML = `
            <img src="${proje.resim}" alt="${proje.baslik}">
            <h3>${proje.baslik}</h3>
            <p>${proje.detay}</p>
        `;

        kart.addEventListener("click", () => popupac(proje));
        projediv.appendChild(kart);
    });
}

// 3. Filtreleme
function projelerifiltrele(kategoriadi) {
    if (kategoriadi === 'hepsi') {
        projelerigoster(projelistesi);
    } else {
        const filtre = projelistesi.filter(p => p.kategori === kategoriadi);
        projelerigoster(filtre);
    }
}

// 4. Popup
function popupac(proje) {
    const popup = document.getElementById("popup");
    const popupicerik = document.getElementById("popup-icerik");

    popupicerik.innerHTML = `
        <h2>${proje.baslik}</h2>
        <img src="${proje.resim}" style="width:100%; border-radius:12px;">
        <p>${proje.detay}</p>
    `;

    popup.style.display = "flex";
}

function popupkapat() {
    document.getElementById("popup").style.display = "none";
}

// 5. Tema
document.getElementById("temabutonu")
.addEventListener("click", () => {
    document.body.classList.toggle("karanlik-mod");
});

// 6. Daktilo Efekti
const metin = "Yusuf Ziya Alkan - Portfolyo";
let indis = 0;

function daktiloefekti() {
    const alan = document.getElementById("daktilo");

    if (indis < metin.length) {
        alan.innerHTML += metin.charAt(indis);
        indis++;
        setTimeout(daktiloefekti, 80);
    }
}

// 7. Özel İmleç
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }
});

// 8. Yetenek Barları
function yetenekAnimasyon() {
    const barlar = document.querySelectorAll(".doluluk");

    barlar.forEach(bar => {
        const deger = bar.getAttribute("data-deger");
        bar.style.width = deger + "%";
    });
}

// SAYFA YÜKLENİNCE
window.onload = () => {
    projelerigoster(projelistesi);
    daktiloefekti();
    yetenekAnimasyon();
};