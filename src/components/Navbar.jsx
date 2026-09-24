import { useState } from "react";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Teknologi", href: "#techstack" },
  { label: "Projek", href: "#projects" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Portofolio", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: "16px 24px",
        pointerEvents: "none",
      }}
    >
      {/* Floating pill nav */}
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "rgba(13,13,13,0.92)",
          backdropFilter: "blur(16px)",
          border: "1px solid #2A2A2A",
          borderRadius: "999px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pointerEvents: "auto",
          boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ display: "flex", gap: "2px", textDecoration: "none" }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "18px", color: "#fff" }}>
            Sastra
          </span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "18px", color: "#B6FF3C" }}>
            Code
          </span>
        </a>

        {/* Desktop links */}
        <ul
          className="hidden md:flex"
          style={{ listStyle: "none", margin: 0, padding: 0, gap: "4px", alignItems: "center" }}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  display: "block",
                  padding: "8px 16px",
                  color: "#A3A3A3",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  borderRadius: "999px",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => { e.target.style.color = "#fff"; e.target.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={(e) => { e.target.style.color = "#A3A3A3"; e.target.style.background = "transparent"; }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            style={{
              background: "#B6FF3C",
              color: "#111",
              padding: "10px 22px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#8FD92F"; e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#B6FF3C"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Hire Me ✦
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={{ display: "block", width: "20px", height: "2px", background: "#fff", borderRadius: "2px", transition: "all 0.3s", transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: "#fff", borderRadius: "2px", transition: "all 0.3s", opacity: isOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: "#fff", borderRadius: "2px", transition: "all 0.3s", transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "8px auto 0",
          background: "rgba(13,13,13,0.96)",
          border: "1px solid #2A2A2A",
          borderRadius: "20px",
          overflow: "hidden",
          maxHeight: isOpen ? "400px" : "0",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  color: "#A3A3A3",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  borderRadius: "12px",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: "8px" }}>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                background: "#B6FF3C",
                color: "#111",
                padding: "12px 16px",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Hire Me ✦
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
