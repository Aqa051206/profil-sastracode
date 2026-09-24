// ─── Projects Data ────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Platform belanja online full-stack dengan fitur keranjang, payment gateway, dan dashboard admin.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    techs: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    category: "Web App",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplikasi manajemen tugas tim dengan real-time collaboration, drag-and-drop, dan notifikasi.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    techs: ["React", "Socket.io", "PostgreSQL", "Redis"],
    link: "#",
    category: "SaaS",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "Dashboard analitik keuangan dengan visualisasi data interaktif, laporan otomatis, dan export PDF.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    techs: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    link: "#",
    category: "Dashboard",
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Aplikasi pelacak kebugaran dengan workout planner, progress tracker, dan integrasi wearable.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    techs: ["React Native", "Firebase", "Redux", "Expo"],
    link: "#",
    category: "Mobile",
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "Tool berbasis AI untuk generate konten blog, caption media sosial, dan copy iklan secara otomatis.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    techs: ["Python", "FastAPI", "OpenAI", "React"],
    link: "#",
    category: "AI Tool",
  },
  {
    id: 6,
    title: "Real Estate Portal",
    description: "Portal properti dengan fitur pencarian canggih, peta interaktif, dan sistem booking virtual tour.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    techs: ["Next.js", "Mapbox", "Supabase", "Tailwind"],
    link: "#",
    category: "Web App",
  },
];

// ─── Testimonials Data ────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: "Rina Kartika",
    role: "CEO, StartupNusantara",
    avatar: "https://i.pravatar.cc/80?img=47",
    quote: "Developer sangat profesional dan komunikatif. Website kami jadi 3x lebih cepat dan konversi naik signifikan. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Founder, TechVenture ID",
    avatar: "https://i.pravatar.cc/80?img=33",
    quote: "Sangat puas dengan hasilnya. Deadline selalu tepat waktu, kode bersih, dan dokumentasi lengkap. Akan terus kerjasama!",
    rating: 5,
  },
  {
    id: 3,
    name: "Maya Putri",
    role: "Marketing Manager, DigitalAgency",
    avatar: "https://i.pravatar.cc/80?img=44",
    quote: "Dashboard analytics yang dibuat sangat membantu tim kami dalam mengambil keputusan bisnis. Desainnya juga keren banget!",
    rating: 5,
  },
  {
    id: 4,
    name: "Dian Pratama",
    role: "Product Manager, FinTechCo",
    avatar: "https://i.pravatar.cc/80?img=12",
    quote: "Berhasil deliver aplikasi mobile dalam waktu 6 minggu. Kualitas kode sangat bagus dan mudah di-maintain tim internal kami.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sari Wulandari",
    role: "Owner, Butik Online",
    avatar: "https://i.pravatar.cc/80?img=56",
    quote: "E-commerce kami sekarang jauh lebih smooth. Pembeli lebih nyaman berbelanja dan penjualan meningkat 40% dalam sebulan!",
    rating: 5,
  },
  {
    id: 6,
    name: "Hendra Wijaya",
    role: "CTO, SaaS Platform",
    avatar: "https://i.pravatar.cc/80?img=18",
    quote: "Kualitas teknis luar biasa. Arsitektur sistemnya scalable dan performa API-nya top. Partner terbaik untuk proyek teknologi.",
    rating: 5,
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
export const faqs = [
  {
    id: 1,
    question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    answer: "Tergantung kompleksitas proyek. Landing page sederhana biasanya 1–2 minggu, web app dengan fitur lengkap bisa 4–8 minggu. Saya selalu memberikan timeline yang realistis di awal proyek.",
  },
  {
    id: 2,
    question: "Teknologi apa yang Anda gunakan?",
    answer: "Saya menggunakan stack modern: React/Next.js untuk frontend, Node.js/Python untuk backend, PostgreSQL/MongoDB untuk database, dan layanan cloud seperti AWS, Vercel, atau Railway untuk deployment.",
  },
  {
    id: 3,
    question: "Apakah ada garansi revisi setelah proyek selesai?",
    answer: "Ya, setiap paket sudah mencakup periode revisi. Paket Basic 2x revisi minor, Standard 5x revisi, dan Premium revisi tidak terbatas selama 1 bulan setelah delivery.",
  },
  {
    id: 4,
    question: "Bagaimana sistem pembayarannya?",
    answer: "Pembayaran dibagi dua: 50% di awal (down payment) dan 50% setelah proyek selesai dan disetujui. Untuk proyek besar bisa dibagi menjadi beberapa tahap milestone.",
  },
  {
    id: 5,
    question: "Apakah Anda bisa menangani proyek jangka panjang atau maintenance?",
    answer: "Tentu! Saya menerima kontrak maintenance bulanan dan bisa menjadi dedicated developer untuk tim Anda. Hubungi saya untuk diskusi paket long-term yang sesuai.",
  },
  {
    id: 6,
    question: "Bisakah Anda membantu jika saya sudah punya desain dari Figma?",
    answer: "Sangat bisa! Saya biasa menerima handoff dari Figma, Adobe XD, atau mockup lainnya dan mengimplementasikannya dengan pixel-perfect ke dalam kode.",
  },
];

// ─── Services Data ─────────────────────────────────────────────────────────────
export const services = [
  {
    title: "Web Development",
    description: "Membangun website dan web application modern yang cepat, aman, dan scalable menggunakan teknologi terkini.",
    icon: "🌐",
  },
  {
    title: "UI/UX Design",
    description: "Merancang antarmuka yang intuitif dan estetis, dari wireframe hingga prototype interaktif di Figma.",
    icon: "🎨",
  },
  {
    title: "API Integration",
    description: "Integrasi API pihak ketiga, pembangunan REST/GraphQL API, dan koneksi antar sistem yang mulus.",
    icon: "🔗",
  },
  {
    title: "Mobile App",
    description: "Pengembangan aplikasi mobile cross-platform dengan React Native untuk iOS dan Android sekaligus.",
    icon: "📱",
  },
];

// ─── Pricing Data ─────────────────────────────────────────────────────────────
export const pricingPlans = [
  {

    id: 1,
    name: "Basic",
    price: "Rp 949.000",
    period: "/ proyek",
    description: "Cocok untuk landing page dan website sederhana.",
    features: [
      "Landing page (1–5 halaman)",
      "Desain responsif mobile",
      "Form kontak",
      "Optimasi SEO dasar",
      "2x revisi",
      "Delivery 1–2 minggu",
    ],
    notIncluded: [],
    cta: "Mulai Sekarang",
    highlighted: false,
    cta: "Pilih Paket Starter",
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
  },
  {

    id: 2,
    name: "Standard",
    price: "Rp 1.899.000 ",
    period: "/ proyek",
    description: "Solusi terbaik untuk bisnis yang butuh web app lengkap.",
    features: [
      "Web app full-stack",
      "Desain responsif semua device",
      "Autentikasi & dashboard",
      "Integrasi API & database",
      "SEO & performa optimal",
      "5x revisi",
      "Delivery 3–5 minggu",
    ],
    notIncluded: [],
    cta: "Pilih Paket Ini",
    highlighted: true,
    cta: "Konsultasi Paket Ini",
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
  },
  {
    id: 3,
    name: "Premium",
    price: "Rp 3.449.000",
    period: "/ proyek",
    description: "Untuk proyek enterprise, SaaS, atau kebutuhan khusus.",
    features: [
      "Semua fitur Standard",
      "Arsitektur scalable & microservice",
      "CI/CD pipeline & DevOps",
      "Testing & QA lengkap",
      "Revisi tidak terbatas (1 bulan)",
      "Maintenance & support ongoing",
      "Delivery sesuai scope",
    ],
    notIncluded: [],
    cta: "Diskusi Lebih Lanjut",
    highlighted: false,
    cta: "Diskusi Kebutuhan",
    features: [
      "Semua fitur di Paket Katalog",
      "Integrasi Form Order ke Google Sheets",
      "Desain Custom Sesuai Branding",
      "Kapasitas Menu / Produk Tidak Dibatasi",
      "Gratis Domain .COM & Cloud Hosting 1 Tahun",
      "Pelatihan Penggunaan Dashboard",
      "Prioritas Pengerjaan & Dukungan 6 Bulan",
    ],
    notIncluded: [
      "Payment Gateway Kartu Kredit (Opsional)",
    ],
  },
];

// ─── Tech Stack Data ───────────────────────────────────────────────────────────
export const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Git", color: "#F05032" },
];

// ─── Why Me Data ──────────────────────────────────────────────────────────────
export const whyMePoints = [
  {
    icon: "⚡",
    title: "Cepat & On-Time",
    description: "Saya berkomitmen penuh pada deadline. 95% proyek selesai tepat waktu atau lebih awal.",
  },
  {
    icon: "✨",
    title: "Kode Bersih & Scalable",
    description: "Menulis kode yang mudah dibaca, di-maintain, dan bisa tumbuh seiring kebutuhan bisnis.",
  },
  {
    icon: "🤝",
    title: "Komunikasi Transparan",
    description: "Update progress rutin, responsif, dan selalu terbuka untuk diskusi dan feedback.",
  },
  {
    icon: "🎯",
    title: "Fokus pada Hasil",
    description: "Bukan sekadar menyelesaikan tugas, tapi memastikan solusi yang dibuat benar-benar berdampak.",
  },
];
