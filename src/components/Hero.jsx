import modelImg from "../assets/model.png";
import { Sparkles } from "lucide-react";

const stats = [
  { value: "20+", label: "Proyek Selesai" },
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "100%", label: "Klien Puas" },
  { value: "10+", label: "Tech Stack" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: "#0D0D0D",
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "0",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Hero Card (Light) ─────────────────────────────────── */}
        <div
          style={{
            background: "#F2F2ED",
            borderRadius: "36px 36px 0px 0px",
            padding: "64px 64px 0",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Spark decorations */}
          <span
            style={{
              position: "absolute",
              top: "32px",
              right: "96px",
              animation: "sparkle 3s ease-in-out infinite",
              color: "#B6FF3C",
            }}
          >
            <Sparkles size={24} aria-hidden="true" />
          </span>
          <span
            style={{
              position: "absolute",
              top: "64px",
              left: "48px",
              animation: "sparkle 3s ease-in-out infinite",
              animationDelay: "1s",
              color: "#B6FF3C",
            }}
          >
            <Sparkles size={14} aria-hidden="true" />
          </span>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "40px",
            }}
          >
            {/* Left: text */}
            <div style={{ flex: "1 1 320px", paddingBottom: "64px" }}>
              {/* Badge */}
            

              {/* Headline */}
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(36px, 5vw, 58px)",
                  lineHeight: 1.1,
                  color: "#111",
                  marginBottom: "24px",
                }}
              >
                Mengubah Ide Menjadi{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span style={{ position: "relative", zIndex: 1 }}>Produk Digital</span>
                  <span
                    style={{
                      position: "absolute",
                      inset: "-2px -6px",
                      background: "#B6FF3C",
                      borderRadius: "8px",
                      zIndex: 0,
                      transform: "rotate(-1deg)",
                    }}
                  />
                </span>{" "}
                yang Nyata
              </h1>

              {/* Sub */}
              <p
                style={{
                  color: "#555",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  marginBottom: "36px",
                  maxWidth: "480px",
                }}
              >
                Full-stack developer & web specialist. Membantu bisnis, UMKM, dan personal branding
                tampil kredibel lewat website modern, loading kilat, dan desain yang memikat.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a
                  href="#projects"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#B6FF3C",
                    color: "#111",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "background 0.2s, transform 0.2s",
                    boxShadow: "0 4px 20px rgba(182,255,60,0.3)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#8FD92F"; e.currentTarget.style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#B6FF3C"; e.currentTarget.style.transform = "scale(1)"; }}
                >
                  Lihat Proyek 
                </a>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    border: "1.5px solid rgba(17,17,17,0.25)",
                    color: "#111",
                    fontWeight: 600,
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#111"; e.currentTarget.style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(17,17,17,0.25)"; e.currentTarget.style.transform = "scale(1)"; }}
                >
                  Hubungi Kami
                </a>
              </div>
            </div>

            {/* Right: image */}
            <div
              style={{
                flex: "0 0 auto",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                position: "relative",
              }}
            >

              <img
                src={modelImg}
                alt="Sastra - Software Developer"
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  height: "auto",
                  maxHeight: "440px",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  borderRadius: "20px 20px 0 0",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Stats Strip ─────────────────────────────────────── */}
        <div
          style={{
            background: "#1A1A1A",
            border: "1px solid #2A2A2A",
            borderTop: "none",
            borderRadius: "0 0 36px 36px",
            padding: "28px 64px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "0 24px",
                  borderRight: i < stats.length - 1 ? "1px solid #2A2A2A" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "36px",
                    color: "#B6FF3C",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ color: "#A3A3A3", fontSize: "13px" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
