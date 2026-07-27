# 🌸 BloomCraft - Flower Shop Frontend Website

Selamat datang di **BloomCraft**, sebuah antarmuka web (*Frontend UI/UX*) dummy e-commerce modern bertema Toko Bunga Segar yang dirancang untuk memberikan pengalaman belanja visual yang estetik, responsif, dan interaktif.

Proyek ini dibangun menggunakan **React 19**, **Vite**, dan **Tailwind CSS v4** sebagai fondasi utama antarmuka pengguna tanpa integrasi backend (Frontend Only).

---

## 🚀 Teknologi Utama

- **[React 19](https://react.dev/)**: Library UI utama untuk membangun komponen deklaratif.
- **[Vite 8](https://vite.dev/)**: Build tool super cepat untuk pengembangan aplikasi web modern.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utility-first untuk desain UI yang estetik, modern, dan fleksibel.
- **[React Router DOM v7](https://reactrouter.com/)**: Manajemen navigasi dan routing halaman SPA (*Single Page Application*).

---

## ✨ Fitur & Halaman Utama

1. **Header & Navigasi Glassmorphism (`Navbar.jsx`)**:
   - Tampilan navigasi melayang (*sticky*) dengan efek kaca transparan (*backdrop blur*).
   - Indikator halaman aktif, ikon profil login, serta badge counter keranjang belanja.
   - Menu *hamburger* responsif untuk tampilan layar seluler.

2. **Halaman Utama (`Home.jsx`)**:
   - **Hero Section**: Latar belakang gradien lembut, badge keunggulan, serta tombol aksi cepat.
   - **Banner Keunggulan**: Fitur Gratis Ongkir, 100% Bunga Segar, Kartu Ucapan Gratis, dan Pengiriman Sameday.
   - **Filter Kategori**: Tombol pilihan kategori (*Roses, Tulips, Graduation, Wedding*).
   - **Katalog Best Seller**: Kartu produk interaktif dengan efek *hover lift* dan *zoom*.
   - **Testimoni Pelanggan**: Ulasan cerita dari pembeli.

3. **Katalog Produk (`Shop.jsx`)**:
   - Menampilkan seluruh varian karangan bunga dalam tata letak grid responsif.

4. **Detail Produk (`ProductDetail.jsx`)**:
   - Navigasi *breadcrumb* (`Home / Shop / Royal Rose Bouquet`).
   - Tampilan foto produk resolusi tinggi, rating bintang, dan stok.
   - Pengatur jumlah pesanan (`-` / `+`).
   - Tab deskripsi produk & panduan cara perawatan bunga segar.
   - Rekomendasi produk serupa di bagian bawah.

5. **Keranjang Belanja (`Cart.jsx`)**:
   - **Progress Bar Gratis Ongkir**: Indikator otomatis pencapaian batas gratis ongkos kirim.
   - Manajemen item belanja (tambah/kurang kuantitas dan hapus item).
   - Ringkasan rincian tagihan (subtotal, estimasi ongkir, total) & form voucher promo.

6. **Checkout Pesanan (`Checkout.jsx`)**:
   - Form data pengiriman lengkap dengan kolom isi **Kartu Ucapan Custom (Free)**.
   - Pilihan metode pembayaran interaktif (*QRIS Instant, BCA Virtual Account, Mandiri VA*).
   - Ringkasan tagihan & layar konfirmasi keberhasilan pesanan.

7. **Kontak (`contact.jsx`) & Tentang Kami (`About.jsx`)**:
   - Informasi galeri toko bunga, kontak WhatsApp, dan form kirim pesan interaktif.
   - Cerita berdirinya BloomCraft, komitmen *Eco-Friendly*, dan *Core Values*.

8. **Autentikasi (`Login.jsx` & `Register.jsx`)**:
   - Tampilan form masuk akun dan pendaftaran pengguna baru.

9. **Footer (`Footer.jsx`)**:
   - Informasi brand, tautan navigasi cepat, form pendaftaran buletin diskon 10%, dan hak cipta.

---

## 📁 Struktur Direktori Proyek

```text
frontend/
├── public/                 # Aset publik (favicon, svg)
├── src/
│   ├── components/         # Komponen UI Reusable
│   │   ├── button.jsx      # Reusable Button (Varian, Gradien, Sizes)
│   │   ├── Footer.jsx      # Footer Dark Mode & Newsletter
│   │   ├── Hero.jsx        # Banner Utama Halaman Beranda
│   │   ├── Navbar.jsx      # Header Navigasi Glassmorphism
│   │   └── ProductCard.jsx # Kartu Produk Interaktif
│   ├── pages/              # Halaman Utama (Views)
│   │   ├── About.jsx       # Halaman Tentang Kami
│   │   ├── Cart.jsx        # Halaman Keranjang Belanja
│   │   ├── Checkout.jsx    # Halaman Form Checkout
│   │   ├── contact.jsx     # Halaman Kontak & Form Pesan
│   │   ├── Home.jsx        # Halaman Beranda / Landings
│   │   ├── Login.jsx       # Halaman Masuk Akun
│   │   ├── ProductDetail.jsx # Halaman Detail Buket Bunga
│   │   ├── Register.jsx    # Halaman Pendaftaran Akun
│   │   └── Shop.jsx        # Halaman Katalog Produk
│   ├── App.jsx             # Router Utama Aplikasi
│   ├── index.css           # Impor Utama Tailwind CSS v4 (@import "tailwindcss";)
│   └── main.jsx            # Root Entry Point React
├── index.html              # Template HTML Utama
├── package.json            # Dependensi Proyek & Script
└── vite.config.js          # Konfigurasi Vite & Plugin Tailwind
```

---

## 🛠️ Cara Menjalankan Proyek Secara Lokal

1. **Clone / Buka Folder Proyek**:
   ```bash
   cd frontend
   ```

2. **Install Dependensi Node.js**:
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembang (Development Server)**:
   ```bash
   npm run dev
   ```

4. **Buka Aplikasi di Browser**:
   Buka alamat URL lokal yang muncul di terminal (biasanya `http://localhost:5173`).

---

## 📌 Catatan PENTING
Aplikasi ini adalah **Website Dummy Frontend-Only**. Semua transaksi, data produk, dan form pengisian dibuat secara statis pada sisi *client-side* untuk keperluan demonstrasi UI/UX dan tidak terhubung ke database atau payment gateway sesungguhnya.
