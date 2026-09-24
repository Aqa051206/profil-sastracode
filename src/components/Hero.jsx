const stats = [
  { value: "20+", label: "Proyek Selesai" },
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "15+", label: "Client Puas" },
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
            borderRadius: "36px",
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
              fontSize: "24px",
              color: "#B6FF3C",
            }}
          >
            ✦
          </span>
          <span
            style={{
              position: "absolute",
              top: "64px",
              left: "48px",
              animation: "sparkle 3s ease-in-out infinite",
              animationDelay: "1s",
              fontSize: "14px",
              color: "#B6FF3C",
            }}
          >
            ✦
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
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#fff",
                  borderRadius: "999px",
                  padding: "8px 16px",
                  marginBottom: "24px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >

              </div>

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
                Software developer dengan fokus pada web & mobile development. Membantu bisnis dan startup
                bertumbuh lewat teknologi yang tepat dan desain yang memukau.
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
                  Lihat Proyek →
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
                  Hubungi Saya
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
              {/* Floating project card */}
              <div
                style={{
                  position: "absolute",
                  left: "-60px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "14px 18px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  whiteSpace: "nowrap",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "#B6FF3C",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  🚀
                </div>
                <div>
                  <p style={{ color: "#111", fontWeight: 700, fontSize: "12px", marginBottom: "2px" }}>Project Selesai</p>
                  <p style={{ color: "#666", fontSize: "11px" }}>20+ delivered</p>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80"
                alt="Developer"
                style={{
                  width: "300px",
                  height: "420px",
                  objectFit: "cover",
                  objectPosition: "top",
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
