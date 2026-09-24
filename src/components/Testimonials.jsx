import { testimonials } from "../data";

const StarRating = ({ rating }) => (
  <div style={{ display: "flex", gap: "2px" }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} style={{ color: i <= rating ? "#B6FF3C" : "#2A2A2A", fontSize: "14px" }}>★</span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: "#0D0D0D", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            Testimoni Client
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 44px)",
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Apa Kata{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "relative", zIndex: 1, color: "#111" }}>Mereka</span>
              <span style={{ position: "absolute", inset: "-2px -6px", background: "#B6FF3C", borderRadius: "8px", zIndex: 0 }} />
            </span>{" "}
            tentang Saya
          </h2>
          <p style={{ color: "#A3A3A3", fontSize: "15px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Kepuasan klien adalah prioritas utama saya.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "20px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(182,255,60,0.4)";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2A2A2A";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "28px", color: "rgba(182,255,60,0.3)", lineHeight: 1 }}>"</span>
                <StarRating rating={t.rating} />
              </div>

              {/* Quote */}
              <p style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.7, flex: 1 }}>
                "{t.quote}"
              </p>

              {/* Divider */}
              <div style={{ borderTop: "1px solid #2A2A2A" }} />

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(182,255,60,0.25)",
                  }}
                />
                <div>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>{t.name}</p>
                  <p style={{ color: "#A3A3A3", fontSize: "12px" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
