const skills = [
  { label: "React & Next.js", value: 92 },
  { label: "Node.js & Express", value: 85 },
  { label: "TypeScript", value: 80 },
  { label: "UI/UX Design", value: 78 },
  { label: "Database Design", value: 82 },
  { label: "DevOps & CI/CD", value: 70 },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "#0D0D0D", padding: "96px 24px" }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left: text + skills */}
        <div>
          {/* Label */}
          <span
            style={{
              display: "inline-block",
              background: "rgba(182,255,60,0.1)",
              border: "1px solid rgba(182,255,60,0.2)",
              color: "#B6FF3C",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "999px",
              marginBottom: "16px",
            }}
          >
            Tentang Saya
          </span>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 3.5vw, 40px)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            Developer yang Peduli pada{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "relative", zIndex: 1, color: "#B6FF3C" }}>Kualitas</span>
              
            </span>{" "}
            dan {" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "relative", zIndex: 1, color: "#B6FF3C" }}>Hasil</span>
              
            </span>{" "}
          </h2>

          <div style={{ marginBottom: "32px" }}>
            <p style={{ color: "#A3A3A3", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
              Halo! Saya adalah software developer dengan pengalaman lebih dari 3 tahun dalam membangun
              produk digital dari nol. Saya berspesialisasi di{" "}
              <strong style={{ color: "#fff" }}>full-stack web development</strong> dan selalu mengutamakan
              performa, skalabilitas, dan user experience yang luar biasa.
            </p>
            <p style={{ color: "#A3A3A3", fontSize: "15px", lineHeight: 1.8 }}>
              Saya percaya bahwa kode yang baik bukan hanya yang bekerja, tapi yang mudah dibaca,
              di-maintain, dan bisa berkembang. Setiap proyek dimulai dengan{" "}
              <strong style={{ color: "#fff" }}>pemahaman mendalam tentang kebutuhan bisnis</strong> klien.
            </p>
          </div>

          {/* Skill bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
            {skills.map((skill, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#fff", fontSize: "14px", fontWeight: 500 }}>{skill.label}</span>
                  <span style={{ color: "#B6FF3C", fontSize: "14px", fontWeight: 700 }}>{skill.value}%</span>
                </div>
                <div
                  style={{
                    height: "6px",
                    background: "#2A2A2A",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${skill.value}%`,
                      background: "linear-gradient(to right, #B6FF3C, #8FD92F)",
                      borderRadius: "999px",
                      boxShadow: "0 0 8px rgba(182,255,60,0.4)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
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
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#8FD92F"; e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#B6FF3C"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Hubungi Kami
          </a>
        </div>

        {/* Right: image */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              aspectRatio: "4/5",
              position: "relative",
            }}
          >
            <img
              src="https://i.pinimg.com/736x/f9/00/7e/f9007ee0f6cc08e66ae4fcde6625fb96.jpg"
              alt="Developer workspace"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 50%)",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "-16px",
              right: "-16px",
              background: "#B6FF3C",
              borderRadius: "20px",
              padding: "16px 20px",
              boxShadow: "0 0 24px rgba(182,255,60,0.3)",
            }}
          >
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "22px", color: "#111", lineHeight: 1, marginBottom: "4px" }}>3+</p>
            <p style={{ color: "#111", fontSize: "12px", fontWeight: 500 }}>Years Exp.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
