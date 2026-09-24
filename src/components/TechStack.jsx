import { techStack } from "../data";

export default function TechStack() {
  const doubled = [...techStack, ...techStack];

  return (
    <section
      id="techstack"
      style={{
        background: "#0D0D0D",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 24px" }}>
        <p
          style={{
            color: "#A3A3A3",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Tech Stack yang Saya Kuasai
        </p>
      </div>

      {/* Marquee */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "100px",
            zIndex: 10,
            background: "linear-gradient(to right, #0D0D0D, transparent)",
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "100px",
            zIndex: 10,
            background: "linear-gradient(to left, #0D0D0D, transparent)",
            pointerEvents: "none",
          }}
        />

        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: "12px",
            width: "max-content",
          }}
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "12px",
                padding: "12px 20px",
                cursor: "default",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(182,255,60,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2A2A2A"; }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: tech.color,
                }}
              />
              <span
                style={{
                  color: "#A3A3A3",
                  fontSize: "14px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
