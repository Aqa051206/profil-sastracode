import { whyMePoints } from "../data";

export default function WhyMe() {
  return (
    <section
      id="why-me"
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
        {/* Left: image */}
        <div style={{ position: "relative" }}>
          <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80"
              alt="Developer coding"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)",
              }}
            />
            {/* Label overlay */}
            <div style={{ position: "absolute", bottom: "32px", left: "32px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "#B6FF3C",
                  color: "#111",
                  fontWeight: 700,
                  fontSize: "13px",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  letterSpacing: "1px",
                  boxShadow: "0 0 20px rgba(182,255,60,0.4)",
                }}
              >
                A CREATIVE DEVELOPER
              </span>
            </div>
          </div>

          {/* Floating code snippet */}
          <div
            style={{
              position: "absolute",
              right: "-32px",
              top: "33%",
              background: "#1A1A1A",
              border: "1px solid #2A2A2A",
              borderRadius: "16px",
              padding: "16px 20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              fontFamily: "'Space Grotesk', monospace",
              fontSize: "13px",
              lineHeight: 1.8,
            }}
          >
            <p style={{ color: "#B6FF3C" }}>{"const dev = {"}</p>
            <p style={{ color: "#A3A3A3", paddingLeft: "12px" }}>passion: true,</p>
            <p style={{ color: "#A3A3A3", paddingLeft: "12px" }}>quality: 💯,</p>
            <p style={{ color: "#B6FF3C" }}>{"}"}</p>
          </div>
        </div>

        {/* Right: points */}
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
            Mengapa Saya?
          </span>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 3.5vw, 40px)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "36px",
            }}
          >
            Mengapa Memilih Saya sebagai{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "relative", zIndex: 1, color: "#111" }}>Partner?</span>
              <span
                style={{
                  position: "absolute",
                  inset: "-2px -6px",
                  background: "#B6FF3C",
                  borderRadius: "8px",
                  zIndex: 0,
                }}
              />
            </span>
          </h2>

          {/* 2x2 Grid points */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "36px",
            }}
          >
            {whyMePoints.map((point, i) => (
              <div
                key={i}
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  borderRadius: "20px",
                  padding: "20px",
                  transition: "transform 0.2s, border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.borderColor = "rgba(182,255,60,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.borderColor = "#2A2A2A"; }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "rgba(182,255,60,0.1)",
                    border: "1px solid rgba(182,255,60,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    marginBottom: "16px",
                  }}
                >
                  {point.icon}
                </div>
                <h4
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  {point.title}
                </h4>
                <p style={{ color: "#A3A3A3", fontSize: "13px", lineHeight: 1.6 }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div
            style={{
              borderTop: "1px solid #2A2A2A",
              borderBottom: "1px solid #2A2A2A",
              padding: "16px 0",
              marginBottom: "32px",
              overflow: "hidden",
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "22px",
                color: "#fff",
                whiteSpace: "nowrap",
                letterSpacing: "-0.5px",
              }}
            >
              Innovate <span style={{ color: "#B6FF3C" }}>✦</span> Build <span style={{ color: "#B6FF3C" }}>✦</span>{" "}
              Deliver <span style={{ color: "#B6FF3C" }}>✦</span> Scale <span style={{ color: "#B6FF3C" }}>✦</span>{" "}
              Grow <span style={{ color: "#B6FF3C" }}>✦</span>
            </p>
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
            Mulai Proyek Bersama →
          </a>
        </div>
      </div>
    </section>
  );
}
