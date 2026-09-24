import { useState } from "react";
import { projects } from "../data";

const categories = ["Semua", "Web App", "SaaS", "Dashboard", "Mobile", "AI Tool"];

export default function Projects() {
  const [active, setActive] = useState("Semua");
  const filtered = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      style={{ background: "#0D0D0D", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header row */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "40px" }}>
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
              Featured Projects
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
              Proyek yang Telah Kami{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ position: "relative", zIndex: 1, color: "#B6FF3C" }}>Buat</span>
              </span>
            </h2>
          </div>

          {/* Category filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  transition: "background 0.2s, transform 0.15s",
                  ...(active === cat
                    ? { background: "#B6FF3C", color: "#111" }
                    : { background: "#1A1A1A", color: "#A3A3A3", outline: "1px solid #2A2A2A" }
                  ),
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.link}
              style={{
                display: "block",
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "20px",
                overflow: "hidden",
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(182,255,60,0.4)";
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)";
                e.currentTarget.querySelector(".proj-title").style.color = "#B6FF3C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2A2A2A";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
                e.currentTarget.querySelector(".proj-title").style.color = "#fff";
              }}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                />
                {/* Category badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(182,255,60,0.15)",
                    border: "1px solid rgba(182,255,60,0.3)",
                    color: "#B6FF3C",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "999px",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <h3
                  className="proj-title"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "17px",
                    color: "#fff",
                    marginBottom: "8px",
                    transition: "color 0.2s",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: "#A3A3A3", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "#2A2A2A",
                        color: "#A3A3A3",
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "4px 10px",
                        borderRadius: "8px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span style={{ color: "#B6FF3C", fontSize: "13px", fontWeight: 600 }}>
                  Lihat Detail →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
