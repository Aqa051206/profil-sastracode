import { services } from "../data";
import { Code2, Globe2, Handshake, Palette, Sparkles, Target, Zap } from "lucide-react";

const serviceIcons = { Code2, Globe2, Handshake, Palette, Sparkles, Target, Zap };

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#0D0D0D",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "48px" }}>
          <div>
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
              Layanan
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#fff",
                lineHeight: 1.15,
              }}
            >
              Apa yang Kami{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ position: "relative", zIndex: 1, color: "#111" }}>Kerjakan</span>
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
          </div>
          <p style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.7, maxWidth: "320px" }}>
            Kami menawarkan berbagai layanan teknologi untuk membantu bisnis Anda tumbuh di era digital.
          </p>
        </div>

        {/* Service Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "border-color 0.2s, background 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(182,255,60,0.4)";
                e.currentTarget.style.background = "rgba(182,255,60,0.03)";
                e.currentTarget.querySelector(".svc-title").style.color = "#B6FF3C";
                e.currentTarget.querySelector(".svc-num").style.color = "rgba(182,255,60,0.3)";
                e.currentTarget.querySelector(".svc-arrow").style.background = "#B6FF3C";
                e.currentTarget.querySelector(".svc-arrow-icon").style.color = "#111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2A2A2A";
                e.currentTarget.style.background = "#1A1A1A";
                e.currentTarget.querySelector(".svc-title").style.color = "#fff";
                e.currentTarget.querySelector(".svc-num").style.color = "#2A2A2A";
                e.currentTarget.querySelector(".svc-arrow").style.background = "#2A2A2A";
                e.currentTarget.querySelector(".svc-arrow-icon").style.color = "#A3A3A3";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  padding: "24px 28px",
                }}
              >
                {/* Number */}
                <span
                  className="svc-num"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "36px",
                    color: "#2A2A2A",
                    flexShrink: 0,
                    width: "56px",
                    transition: "color 0.2s",
                  }}
                >
                  {service.id}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    flexShrink: 0,
                    background: "#2A2A2A",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B6FF3C",
                  }}
                >
                  {(() => {
                    const Icon = serviceIcons[service.icon];
                    return <Icon size={22} strokeWidth={1.8} aria-hidden="true" />;
                  })()}
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <h3
                    className="svc-title"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#fff",
                      marginBottom: "6px",
                      transition: "color 0.2s",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                </div>

             
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
