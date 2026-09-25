import { pricingPlans } from "../data";
import { Check, Star, X } from "lucide-react";

export default function Pricing() {
  return (
    <section
      id="pricing"
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
            Paket Layanan
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
            Pilih Paket yang{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "relative", zIndex: 1, color: "#111" }}>Tepat</span>
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
          <p style={{ color: "#A3A3A3", fontSize: "15px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Harga transparan, tanpa biaya tersembunyi. Pilih paket sesuai kebutuhan proyek Anda.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: "#1A1A1A",
                border: plan.highlighted ? "2px solid #B6FF3C" : "1px solid #2A2A2A",
                borderRadius: "24px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: plan.highlighted ? "0 0 40px rgba(182,255,60,0.12)" : "none",
                transform: plan.highlighted ? "scale(1.03)" : "scale(1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => { if (!plan.highlighted) e.currentTarget.style.transform = "scale(1.02)"; }}
              onMouseLeave={(e) => { if (!plan.highlighted) e.currentTarget.style.transform = "scale(1)"; else e.currentTarget.style.transform = "scale(1.03)"; }}
            >
              {/* Recommended badge */}
              {plan.highlighted && (
                <div style={{ textAlign: "center", paddingTop: "16px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: "#B6FF3C",
                      color: "#111",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      padding: "6px 20px",
                      borderRadius: "999px",
                    }}
                  >
                    <Star size={13} fill="#111" aria-hidden="true" /> Rekomendasi
                  </span>
                </div>
              )}

              <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Name & price */}
                <div style={{ marginBottom: "24px" }}>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#fff",
                      marginBottom: "12px",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "12px" }}>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "32px",
                        color: plan.highlighted ? "#B6FF3C" : "#fff",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ color: "#A3A3A3", fontSize: "14px" }}>{plan.period}</span>
                  </div>
                  <p style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.6 }}>{plan.description}</p>
                </div>

                <div style={{ borderTop: "1px solid #2A2A2A", marginBottom: "24px" }} />

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span
                        style={{
                          flexShrink: 0,
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "rgba(182,255,60,0.15)",
                          border: "1px solid rgba(182,255,60,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#B6FF3C",
                          marginTop: "1px",
                        }}
                      >
                          <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.5 }}>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={`no-${i}`} style={{ display: "flex", alignItems: "flex-start", gap: "12px", opacity: 0.35 }}>
                      <span
                        style={{
                          flexShrink: 0,
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "#2A2A2A",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#A3A3A3",
                          marginTop: "1px",
                        }}
                      >
                        <X size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.5 }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/6288216289887?text=Halo%20SastraCode,%20kami%20tertarik%20konsultasi%20${encodeURIComponent(plan.name)}%20(${encodeURIComponent(plan.price)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "14px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "background 0.2s, transform 0.2s",
                    ...(plan.highlighted
                      ? { background: "#B6FF3C", color: "#111" }
                      : { background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }
                    ),
                  }}
                  onMouseEnter={(e) => {
                    if (plan.highlighted) { e.currentTarget.style.background = "#8FD92F"; }
                    else { e.currentTarget.style.borderColor = "#B6FF3C"; e.currentTarget.style.color = "#B6FF3C"; }
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    if (plan.highlighted) { e.currentTarget.style.background = "#B6FF3C"; }
                    else { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; }
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
