# Design Spec — Portfolio Website Software Developer

> Dokumen ini adalah acuan desain untuk dibangun di **Antigravity**.
> Struktur/wireframe mengacu pada referensi 1 (layout section-by-section),
> gaya visual (warna, tipografi, kartu) mengacu pada referensi 2 (dark + green accent).

---

## 1. Ringkasan Proyek

- **Nama Proyek:** Portfolio Website — Software Developer
- **Tujuan:** Landing page portofolio personal untuk menampilkan skill, tech stack, proyek, layanan (jika freelance), testimoni klien, dan kontak.
- **Gaya Visual:** Modern, dark theme, aksen hijau neon, clean, banyak whitespace, kartu dengan sudut membulat (rounded-2xl).
- **Referensi Layout:** Struktur section wireframe (hero → navbar sticky → logo strip → about → pricing/services → why choose → testimonial → FAQ → footer).
- **Referensi Visual:** Palet warna gelap + hijau neon, tipografi bold sans-serif, kartu abu-abu gelap dengan border tipis.

---

## 2. Design Tokens

### 2.1 Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `--bg-primary` | `#0D0D0D` | Background utama (dark section) |
| `--bg-secondary` | `#1A1A1A` | Background kartu / panel |
| `--bg-surface` | `#F5F5F0` | Background section terang (hero card, about image bg) |
| `--accent-green` | `#B6FF3C` | Aksen utama (CTA, highlight teks, badge) |
| `--accent-green-dark` | `#8FD92F` | Hover state aksen |
| `--text-primary` | `#FFFFFF` | Teks di atas background gelap |
| `--text-secondary` | `#A3A3A3` | Teks deskripsi/sekunder |
| `--text-dark` | `#111111` | Teks di atas background terang |
| `--border-subtle` | `#2A2A2A` | Border kartu, divider |

### 2.2 Tipografi

- **Font Heading:** Sans-serif bold/extrabold (mis. `Space Grotesk`, `Inter Bold`, atau `General Sans`)
- **Font Body:** Sans-serif regular (mis. `Inter`, `Satoshi`)
- **Skala:**
  - H1 (Hero title): 40–56px, bold, line-height ketat
  - H2 (Section title): 28–36px, bold
  - H3 (Card title): 18–20px, semibold
  - Body: 14–16px, regular
  - Caption/label: 12–13px, medium, uppercase letter-spacing untuk badge

### 2.3 Spacing & Radius

- Container max-width: `1200px`, padding horizontal `24px` (mobile) / `80px` (desktop)
- Section vertical spacing: `96–120px` antar section
- Card radius: `20–24px` (rounded-2xl / rounded-3xl)
- Button radius: `full` (pill shape)
- Grid gap kartu: `24px`

### 2.4 Efek

- Shadow lembut pada kartu terang: `0 8px 24px rgba(0,0,0,0.08)`
- Glow tipis di sekitar elemen aksen hijau (opsional): `0 0 24px rgba(182,255,60,0.25)`
- Hover: scale `1.02` + transisi `200ms ease`

---

## 3. Struktur Halaman (Section by Section)

### 3.1 Navbar (Sticky)
- Background: pill hitam solid (`--bg-primary`), rounded-full, floating dengan margin dari edge.
- Kiri: Logo/nama ("**Nama** Dev" — kata kedua warna hijau, mengikuti pola "Sastra **Code**" / "**Creatix**").
- Tengah/kanan: menu — `Home`, `About`, `Skills`, `Projects`, `Testimoni`, `Contact`.
- CTA kanan (opsional): tombol hijau kecil "Let's Talk" / "Hire Me".

### 3.2 Hero Section
- Background: kartu terang (`--bg-surface`) dengan sudut bawah membulat besar, kontras dengan navbar gelap di atasnya.
- Layout: judul besar di kiri/tengah, foto developer (ilustrasi/foto profesional, pose casual-formal) di kanan atau tengah.
- Headline pola: *"Mengubah [X] Menjadi [Y]"* → misal:
  **"Mengubah Ide Menjadi Produk Digital yang Nyata"** (kata terakhir highlight hijau).
- Subheadline: 2 baris deskripsi singkat siapa kamu & value proposition.
- CTA ganda: tombol utama (hijau, solid, pill) "Lihat Proyek" + tombol sekunder (outline) "Hubungi Saya".
- Elemen dekoratif: bintang/spark kecil warna hijau, badge rating "★★★★★ X+ Tahun Pengalaman" (opsional, ambil dari referensi 2).

### 3.3 Stats Strip (opsional, dari referensi 2)
- Bar horizontal gelap berisi 3–4 angka pencapaian:
  `20+ Proyek Selesai` · `3+ Tahun Pengalaman` · `15+ Client Puas` · `10+ Tech Stack Dikuasai`

### 3.4 Tech Stack / Tools Logo Strip
- Baris horizontal 4–6 box abu-abu (rounded) berisi logo tools/bahasa yang dikuasai (React, Node.js, Figma, dsb).
- Bisa dibuat auto-scroll (marquee) untuk versi lebih dinamis.

### 3.5 About Me
- Layout 2 kolom: teks di kiri (2 paragraf: siapa kamu, fokus keahlian), gambar/ilustrasi di kanan (foto kerja/workspace, rounded card besar).
- Section title: **"Tentang Saya"**.

### 3.6 Services / What I Do
- Judul: **"Layanan"** atau **"Apa yang Saya Kerjakan"**.
- Grid kartu (3–4 kolom desktop, stack di mobile): tiap kartu = ikon + judul layanan (mis. Web Development, UI/UX Design, API Integration, Mobile App) + deskripsi singkat + panah "→".
- Gaya kartu: dark card dengan border tipis, hover kartu jadi hijau (highlight), mengikuti pola "01 UI/UX Design →" di referensi 2.

### 3.7 Pricelist / Paket Kerjasama (jika freelance)
- Judul: **"Paket Layanan"**.
- 3 kartu vertikal berdampingan (Basic / Standard / Premium), tiap kartu: nama paket, harga, list fitur (checklist), tombol CTA di bawah.
- Kartu tengah bisa di-highlight (lebih tinggi/border hijau) sebagai "Rekomendasi".

### 3.8 Mengapa Memilih Saya
- Layout 2 kolom: gambar/kartu di kiri, teks + list poin keunggulan di kanan, ditutup CTA button.

### 3.9 Featured Projects / Portfolio
- Grid 2–3 kolom kartu proyek: thumbnail screenshot project, nama project, tech stack (badge kecil), link "Lihat Detail →".
- (Section ini tidak ada eksplisit di wireframe referensi tapi **wajib** untuk portfolio developer.)

### 3.10 Team (skip jika portfolio individu — hanya relevan jika ini agency/tim)

### 3.11 Testimoni Client
- Judul: **"Testimoni Client"**.
- Grid 2 baris x 3 kolom kartu testimoni: foto/avatar, nama, role/perusahaan, kutipan singkat, rating bintang.
- Tombol "Lihat Semua Testimoni" di bawah (opsional).

### 3.12 FAQ
- Judul: **"FAQ"**.
- Accordion list (4–6 pertanyaan) dengan latar section abu terang, tiap item collapsible.

### 3.13 CTA / Get in Touch
- Section penutup sebelum footer: ajakan kontak, input email/kontak singkat + tombol kirim.

### 3.14 Footer
- Background gelap penuh (atau hijau solid seperti referensi 2 untuk kontras kuat).
- Kolom: Logo & deskripsi singkat | Contact Info (email, telepon, alamat) | Social Media (icon IG, FB, TikTok, WhatsApp/LinkedIn/GitHub).
- Bottom bar: copyright.

---

## 4. Komponen UI Reusable

| Komponen | Deskripsi |
|---|---|
| `Button/Primary` | Pill, background hijau, teks hitam, hover darken |
| `Button/Secondary` | Pill, outline putih/hijau, transparan |
| `Card/Dark` | Background `--bg-secondary`, border `--border-subtle`, radius 20px |
| `Card/Light` | Background `--bg-surface`, shadow lembut, radius 24px |
| `Badge` | Pill kecil, background hijau muda transparan, teks hijau |
| `NavPill` | Navbar mengambang, rounded-full, dark |
| `SectionTitle` | H2 dengan 1 kata di-highlight warna hijau (rounded background) |

---

## 5. Responsive Notes

- **Desktop (≥1024px):** grid multi-kolom penuh, navbar horizontal.
- **Tablet (768–1023px):** grid 2 kolom, navbar tetap horizontal tapi menu bisa diringkas.
- **Mobile (<768px):** semua section stack 1 kolom, navbar jadi hamburger menu, hero image di bawah teks, hero card radius bawah tetap dipertahankan.

---

## 6. Catatan Implementasi untuk Antigravity

- Gunakan struktur section di atas sebagai urutan komponen halaman utama (`page.tsx` / `index.html`).
- Pisahkan tiap section jadi komponen sendiri: `Navbar`, `Hero`, `TechStack`, `About`, `Services`, `Pricing`, `WhyMe`, `Projects`, `Testimonials`, `FAQ`, `CTA`, `Footer`.
- Warna & spacing pakai design tokens di atas (bisa langsung dipetakan ke CSS variables / Tailwind config).
- Prioritaskan versi dark-theme + aksen hijau sesuai referensi 2, tapi struktur/urutan section ikuti wireframe referensi 1.
- Section **Featured Projects** wajib ditambahkan meski tidak ada di wireframe asli, karena ini krusial untuk portfolio developer.