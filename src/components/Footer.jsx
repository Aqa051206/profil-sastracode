import { BriefcaseBusiness, Camera, Clock3, Code2,Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const socialLinks = [
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/6288216289887?text=Halo%20SastraCode" },
  { label: "GitHub", icon: Code2, href: "https://github.com" },
  { label: "LinkedIn", icon: BriefcaseBusiness, href: "https://linkedin.com" },
  { label: "Instagram", icon: Camera, href: "https://instagram.com" },
];

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Paket Harga", href: "#pricing" },
  { label: "Portofolio", href: "#projects" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid #2A2A2A",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Col 1 */}
          <div>
            <a href="#home" style={{ display: "flex", gap: "2px", textDecoration: "none", marginBottom: "16px" }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "22px", color: "#fff" }}>Sastra</span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "22px", color: "#B6FF3C" }}>Code</span>
            </a>
            <p style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.7, maxWidth: "280px", marginBottom: "24px" }}>
              Jasa pembuatan website & aplikasi web profesional. Membantu bisnis dan UMKM bertumbuh lewat solusi digital modern.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#B6FF3C";
                    e.currentTarget.style.background = "rgba(182,255,60,0.1)";
                    e.currentTarget.style.transform = "scale(1.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2A2A2A";
                    e.currentTarget.style.background = "#1A1A1A";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <s.icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: nav */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Navigasi
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: "#A3A3A3",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#B6FF3C"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#A3A3A3"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Kontak
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: Mail, text: "sastracode8@gmail.com", href: "mailto:sastracode8@gmail.com" },
                { icon: Phone, text: "+62 882-1628-9887", href: "https://wa.me/6288216289887?text=Halo%20SastraCode" },
                { icon: MapPin, text: "Madiun, Indonesia", href: null },
                { icon: Clock3, text: "Senin–Jumat, 08.00–14.00", href: null },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ color: "#B6FF3C", marginTop: "1px" }}><item.icon size={14} aria-hidden="true" /></span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ color: "#A3A3A3", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#A3A3A3"; }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ color: "#A3A3A3", fontSize: "13px" }}>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #2A2A2A",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p style={{ color: "#A3A3A3", fontSize: "13px" }}>
            © 2026 <span style={{ color: "#fff" }}>SastraCode</span>. All rights reserved.
          </p>
   
        </div>
      </div>
    </footer>
  );
}
