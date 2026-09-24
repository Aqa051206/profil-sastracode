const socialLinks = [
  { label: "GitHub", icon: "🐙", href: "#" },
  { label: "LinkedIn", icon: "💼", href: "#" },
  { label: "Instagram", icon: "📸", href: "#" },
  { label: "WhatsApp", icon: "💬", href: "#" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
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
            <p style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.7, maxWidth: "260px", marginBottom: "24px" }}>
              Software developer yang berfokus pada pembuatan produk digital berkualitas tinggi.
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
                    fontSize: "18px",
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
                  {s.icon}
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
                { icon: "📧", text: "hello@sastracode.dev", href: "mailto:hello@sastracode.dev" },
                { icon: "📱", text: "+62 812-3456-7890", href: "tel:+6281234567890" },
                { icon: "📍", text: "Yogyakarta, Indonesia", href: null },
                { icon: "🕐", text: "Senin–Jumat, 09.00–18.00", href: null },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ color: "#B6FF3C", fontSize: "14px", marginTop: "1px" }}>{item.icon}</span>
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
          <p style={{ color: "#A3A3A3", fontSize: "13px" }}>
            Built with <span style={{ color: "#B6FF3C" }}>❤</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
