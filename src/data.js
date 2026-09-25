import imgTemukanKopi from "./assets/temukankopi.png";
import imgRentalMobil from "./assets/rentalmobil.png";
import imgPerpustakaan from "./assets/perpustakaan.png";
import imgDesa from "./assets/desa.png";
import imgGym from "./assets/gym.png";
import imgKatalogBaju from "./assets/katalogbaju.png";
import imgTestimoni1 from "./assets/testimoni1.jpeg";
import imgTestimoni2 from "./assets/testimoni2.jpeg";
import imgTestimoni3 from "./assets/testimoni3.jpeg";

// ─── Projects Data ────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Temukan Kopi — Kafe & Menu Digital",
    description: "Website landing page kafe dengan katalog menu interaktif, filter varian kopi, dan fitur order langsung terhubung ke kasir via WhatsApp.",
    image: imgTemukanKopi,
    techs: ["Tailwind CSS", "WhatsApp Checkout", "Responsive UI"],
    link: "#",
    category: "Web App",
  },
  {
    id: 2,
    title: "Rental Mobil — Sewa Armada Online",
    description: "Platform rental kendaraan online dengan katalog armada lengkap, transparansi harga lepas kunci/sopir, dan formulir booking cepat.",
    image: imgRentalMobil,
    techs: ["Laravel", "Tailwind CSS", "Booking System"],
    link: "#",
    category: "Web App",
  },
  {
    id: 3,
    title: "Atenanium — Sistem Informasi Perpustakaan",
    description: "Aplikasi web manajemen perpustakaan modern untuk pencarian katalog buku, pencatatan sirkulasi peminjaman, dan pelacakan denda.",
    image: imgPerpustakaan,
    techs: ["Laravel", "Database", "Admin Dashboard"],
    link: "#",
    category: "Sistem Informasi",
  },
  {
    id: 4,
    title: "Portal Resmi Desa Mandiri — Layanan Publik",
    description: "Website informasi dan layanan administrasi desa, transparansi anggaran APBDes, berita terkini, dan pengajuan surat warga secara daring.",
    image: imgDesa,
    techs: ["Laravel", "CMS", "Layanan Publik", "Mobile Friendly"],
    link: "#",
    category: "Portal Publik",
  },
  {
    id: 5,
    title: "Pard Gym — Fitness & Membership Center",
    description: "Website sarana kebugaran dengan jadwal kelas harian, informasi fasilitas olahraga, paket membership, dan profil personal trainer.",
    image: imgGym,
    techs: ["Laravel", "Modern UI", "Membership Plan", "High Speed"],
    link: "#",
    category: "Landing Page",
  },
  {
    id: 6,
    title: "Piancollections — Katalog Busana & Fashion",
    description: "Etalase belanja busana online dengan filter kategori produk, panduan ukuran busana, dan alur checkout pesanan yang praktis.",
    image: imgKatalogBaju,
    techs: ["React", "E-Commerce", "Product Showcase", "Vite"],
    link: "#",
    category: "E-Commerce",
  },
];

// ─── Testimonials Data ────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: "Client 1",
    role: "Klien Personal",
    avatar: imgTestimoni1,
    detail: "Dokumentasi hasil pengerjaan website sesuai kebutuhan klien dengan proses komunikasi yang lancar.",
  },
  {
    id: 2,
    name: "Fian",
    role: "Klien Personal",
    avatar: imgTestimoni2,
    detail: "Dokumentasi penyelesaian proyek dan dukungan perbaikan setelah website selesai digunakan.",
  },
  {
    id: 3,
    name: "Klien Personal",
    role: "Klien Personal",
    avatar: imgTestimoni3,
    detail: "Dokumentasi proses kerja yang transparan, aman, dan diselesaikan sampai tahap akhir.",
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
export const faqs = [
  {
    id: 1,
    question: "Berapa lama estimasi pengerjaan website?",
    answer: "Untuk Landing Page (Paket Starter) biasanya selesai dalam 3–7 hari kerja. Paket Katalog / Bisnis memerlukan waktu 1–2 minggu, sedangkan sistem kustom (Paket Pro) 2–4 minggu tergantung kompleksitas fitur.",
  },
  {
    id: 2,
    question: "Apakah website sudah termasuk Domain dan Hosting?",
    answer: "Ya! Semua paket sudah termasuk gratis domain pilihan (.com / .my.id / .id) serta high-speed cloud hosting selama 1 tahun pertama. Anda tinggal terima beres.",
  },
  {
    id: 3,
    question: "Apakah tampilan website ramah diakses lewat HP (Mobile Friendly)?",
    answer: "Tentu saja. Semua website dirancang secara mobile-first dan 100% responsif, memastikan tampilan rapi dan nyaman dibuka baik di smartphone, tablet, maupun laptop.",
  },
  {
    id: 4,
    question: "Bagaimana sistem pembayaran proyek?",
    answer: "Pembayaran terbagi menjadi dua tahap: Down Payment (DP) 50% di awal saat kesepakatan proyek, dan pelunasan 50% setelah website selesai diuji coba dan siap diluncurkan.",
  },
  {
    id: 5,
    question: "Apakah ada garansi dan bantuan setelah website online?",
    answer: "Ya, kami memberikan masa garansi perbaikan bug dan pendampingan teknis gratis mulai dari 1 bulan hingga 6 bulan (sesuai paket). Kami tidak akan meninggalkan Anda setelah website jadi.",
  },
  {
    id: 6,
    question: "Bisakah menambah fitur baru di kemudian hari?",
    answer: "Sangat bisa! Struktur kode kami buat modular, bersih, dan terukur (scalable), sehingga memudahkan penambahan fitur baru kapan pun bisnis Anda berkembang.",
  },
];

// ─── Services Data ─────────────────────────────────────────────────────────────
export const services = [
  {
    id: "01",
    title: "Web Development & Landing Page",
    description: "Membangun website modern, cepat, dan mobile-responsive yang dirancang untuk meningkatkan konversi dan kredibilitas bisnis Anda.",
    icon: "Globe2",
  },
  {
    id: "02",
    title: "UI/UX Design & Prototyping",
    description: "Merancang antarmuka visual yang intuitif, bersih, dan estetis menggunakan Figma sebelum implementasi ke kode produksi.",
    icon: "Palette",
  },
  {
    id: "03",
    title: "Sistem Informasi & Web App",
    description: "Pengembangan sistem digital kustom seperti sistem rental mobil, manajemen perpustakaan, hingga portal instansi desa.",
    icon: "Code2",
  },
  {
    id: "04",
    title: "Integrasi API & Otomasi WhatsApp",
    description: "Koneksi pemesanan instan ke WhatsApp admin, pencatatan otomatis transaksi ke Google Sheets, serta optimasi SEO lokal Google.",
    icon: "Zap",
  },
];

// ─── Pricing Data ─────────────────────────────────────────────────────────────
export const pricingPlans = [
  {
    id: 1,
    name: "Paket Starter",
    price: "Rp 949.000",
    period: "/ proyek",
    description: "Pilihan hemat dan tepat untuk landing page profil bisnis, UMKM, atau promosi jasa.",
    features: [
      "Landing page 1 halaman (One-page)",
      "Gratis Domain (.com / .my.id) 1 Tahun",
      "Cloud Hosting Cepat 1 Tahun",
      "Tombol Direct Chat WhatsApp",
      "Integrasi Google Maps & Alamat",
      "Tampilan Responsif (HP & Laptop)",
      "Garansi & Bantuan 1 Bulan",
    ],
    notIncluded: [
      "Fitur Katalog / Keranjang Belanja",
      "Rekap Otomatis ke Google Sheets",
      "Revisi Tanpa Batas",
    ],
    cta: "Pilih Paket Starter",
    highlighted: false,
  },
  {
    id: 2,
    name: "Paket Bisnis & Katalog",
    price: "Rp 1.899.000",
    period: "/ proyek",
    description: "Solusi favorit untuk toko online, kafe/resto, rental mobil, atau bisnis dengan katalog interaktif.",
    features: [
      "Halaman Profil + Katalog Interaktif",
      "Fitur Keranjang Belanja (Cart)",
      "Checkout Otomatis ke WhatsApp Kasir",
      "Gratis Domain .COM 1 Tahun",
      "High Speed Cloud Hosting 1 Tahun",
      "Input hingga 20-30 Menu / Produk",
      "SEO Lokal (Muncul di Google Search)",
      "Garansi & Maintenance 3 Bulan",
    ],
    notIncluded: [
      "Rekap Otomatis ke Google Sheets",
      "Sistem Multi-Cabang",
    ],
    cta: "Konsultasi Paket Ini",
    highlighted: true,
  },
  {
    id: 3,
    name: "Paket Custom Pro",
    price: "Rp 3.449.000",
    period: "/ proyek",
    description: "Untuk kebutuhan sistem informasi kustom, portal instansi/desa, atau aplikasi web dengan fitur khusus.",
    features: [
      "Semua fitur di Paket Katalog",
      "Integrasi Form Order ke Google Sheets",
      "Desain Custom Sesuai Branding Anda",
      "Kapasitas Menu / Produk Tidak Dibatasi",
      "Gratis Domain .COM & Cloud Hosting 1 Tahun",
      "Pelatihan Penggunaan Dashboard / Admin",
      "Prioritas Pengerjaan & Dukungan 6 Bulan",
    ],
    notIncluded: [
      "Payment Gateway Kartu Kredit (Opsional)",
    ],
    cta: "Diskusi Kebutuhan Pro",
    highlighted: false,
  },
];

// ─── Tech Stack Data ───────────────────────────────────────────────────────────
export const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Laravel", color: "#F24E1E" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Vite", color: "#646CFF" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Git", color: "#F05032" },
  { name: "Vercel", color: "#FFFFFF" },
  { name: "Cloudflare", color: "#F38020" },
];

// ─── Why Me Data ──────────────────────────────────────────────────────────────
export const whyMePoints = [
  {
    icon: "Zap",
    title: "Cepat & On-Time",
    description: "Kami berkomitmen penuh pada jadwal deadline. Pengerjaan terstruktur sehingga hasil website siap tepat waktu.",
  },
  {
    icon: "Sparkles",
    title: "Kode Bersih & Scalable",
    description: "Dibuat dengan standar teknologi modern yang mudah dikembangkan sewaktu-waktu sesuai skala pertumbuhan bisnis Anda.",
  },
  {
    icon: "Handshake",
    title: "Komunikasi Ramah & Transparan",
    description: "Update berkala selama masa pengerjaan, tidak ada biaya siluman, dan selalu siap mendengarkan aspirasi Anda.",
  },
  {
    icon: "Target",
    title: "Fokus Solusi & Konversi",
    description: "Bukan sekadar website bagus, tapi dirancang efektif menghasilkan pesanan, leads, dan kepercayaan pelanggan Anda.",
  },
];
