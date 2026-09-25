import { useState } from "react";
import { projects } from "../data";
import { ArrowRight, MessageCircle, Search, X } from "lucide-react";

export default function Projects() {
  const [active, setActive] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["Semua", ...Array.from(new Set(projects.map((p) => p.category)))];
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
              Portofolio Pilihan
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
                <span style={{ position: "relative", zIndex: 1, color: "#B6FF3C" }}>Bangun</span>
              </span>
            </h2>
            <p style={{ color: "#A3A3A3", fontSize: "14px", marginTop: "12px", maxWidth: "480px" }}>
              Kumpulan karya website riil untuk bisnis, kafe, rental, institusi publik, dan e-commerce yang telah kami kerjakan.
            </p>
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
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") setSelectedProject(project); }}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(182,255,60,0.5)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.6)";
                const title = e.currentTarget.querySelector(".proj-title");
                if (title) title.style.color = "#B6FF3C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2A2A2A";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
                const title = e.currentTarget.querySelector(".proj-title");
                if (title) title.style.color = "#fff";
              }}
            >
              {/* Thumbnail */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "#111" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
                {/* Category badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(13,13,13,0.8)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(182,255,60,0.4)",
                    color: "#B6FF3C",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "999px",
                  }}
                >
                  {project.category}
                </span>

                <span
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    background: "rgba(13,13,13,0.75)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  <Search size={12} aria-hidden="true" /> Klik Preview
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3
                  className="proj-title"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#fff",
                    marginBottom: "10px",
                    transition: "color 0.2s",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: "#A3A3A3", fontSize: "13px", lineHeight: 1.6, marginBottom: "20px", flex: 1 }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "#222222",
                        border: "1px solid #333",
                        color: "#B6FF3C",
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "3px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "8px", borderTop: "1px solid #262626" }}>
                  <span style={{ color: "#B6FF3C", fontSize: "13px", fontWeight: 700 }}>
                    Lihat Selengkapnya <ArrowRight size={14} aria-hidden="true" />
                  </span>
                  <span style={{ color: "#777", fontSize: "12px" }}>
                    Detail Desain
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#181818",
              border: "1px solid #333",
              borderRadius: "24px",
              maxWidth: "880px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 24px 60px rgba(0,0,0,0.9)",
              position: "relative",
            }}
          >
            {/* Modal header image */}
            <div style={{ position: "relative", background: "#0a0a0a" }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: "100%", height: "auto", maxHeight: "460px", objectFit: "contain", display: "block" }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "rgba(0,0,0,0.7)",
                  border: "1px solid #444",
                  color: "#fff",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: 700,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#B6FF3C"; e.currentTarget.style.color = "#111"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.7)"; e.currentTarget.style.color = "#fff"; }}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Modal details */}
            <div style={{ padding: "32px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span
                  style={{
                    background: "rgba(182,255,60,0.15)",
                    border: "1px solid rgba(182,255,60,0.3)",
                    color: "#B6FF3C",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "999px",
                  }}
                >
                  {selectedProject.category}
                </span>
                <span style={{ color: "#777", fontSize: "13px" }}>• Live Production Case</span>
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "#fff",
                  marginBottom: "14px",
                }}
              >
                {selectedProject.title}
              </h3>

              <p style={{ color: "#CCC", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: "28px" }}>
                <p style={{ color: "#888", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>
                  Teknologi & Fitur Kunci:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selectedProject.techs.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "#242424",
                        border: "1px solid #3A3A3A",
                        color: "#B6FF3C",
                        fontSize: "12px",
                        fontWeight: 600,
                        padding: "6px 14px",
                        borderRadius: "8px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a
                  href={`https://wa.me/6288216289887?text=Halo%20SastraCode,%20kami%20tertarik%20membuat%20website%20seperti%20proyek%20${encodeURIComponent(selectedProject.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#B6FF3C",
                    color: "#111",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(182,255,60,0.3)",
                  }}
                >
                  <MessageCircle size={16} aria-hidden="true" /> Konsultasi Proyek Serupa via WhatsApp
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: "#2A2A2A",
                    color: "#fff",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Tutup Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
