import { useEffect, useState } from "react";
import { testimonials } from "../data";
import { ArrowUpRight, FileText, Image, X } from "lucide-react";

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    if (!selectedTestimonial) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedTestimonial(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedTestimonial]);

  return (
    <section id="testimonials" style={{ background: "#0D0D0D", padding: "96px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            Dokumentasi Klien
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
            Detail <span style={{ color: "#B6FF3C" }}>Pekerjaan</span> Klien
          </h2>
          <p style={{ color: "#A3A3A3", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Lihat ringkasan pekerjaan dan dokumentasi gambar dari setiap proses yang telah diselesaikan.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              onClick={() => setSelectedTestimonial(testimonial)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedTestimonial(testimonial);
                }
              }}
              role="button"
              tabIndex={0}
              style={{
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor = "rgba(182,255,60,0.4)";
                event.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor = "#2A2A2A";
                event.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div style={{ height: "280px", position: "relative", background: "#111", overflow: "hidden" }}>
                <img
                  src={testimonial.avatar}
                  alt={`Dokumentasi pekerjaan ${testimonial.name}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(13,13,13,0.02) 45%, rgba(13,13,13,0.9) 100%)" }} />
                <div style={{ position: "absolute", left: "18px", right: "18px", bottom: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#B6FF3C", fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
                    <Image size={13} aria-hidden="true" /> Klik untuk lihat gambar
                  </span>
                  <span style={{ width: "30px", height: "30px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "#B6FF3C", color: "#111" }}>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <FileText size={22} color="#B6FF3C" aria-hidden="true" />
                  <p style={{ color: "#fff", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>Detail Pekerjaan</p>
                </div>
                <p style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.7, flex: 1 }}>{testimonial.detail}</p>
                <div style={{ borderTop: "1px solid #2A2A2A" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>{testimonial.name}</p>
                    <p style={{ color: "#A3A3A3", fontSize: "12px" }}>{testimonial.role}</p>
                  </div>
                  <ArrowUpRight size={19} color="#B6FF3C" aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedTestimonial && (
        <div
          onClick={() => setSelectedTestimonial(null)}
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
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              background: "#181818",
              border: "1px solid #333",
              borderRadius: "24px",
              maxWidth: "720px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "auto",
              boxShadow: "0 24px 60px rgba(0,0,0,0.9)",
            }}
          >
            <div style={{ position: "relative", background: "#0a0a0a" }}>
              <img
                src={selectedTestimonial.avatar}
                alt={`Detail dokumentasi pekerjaan ${selectedTestimonial.name}`}
                style={{ width: "100%", maxHeight: "65vh", objectFit: "contain", display: "block" }}
              />
              <button
                type="button"
                aria-label="Tutup detail gambar"
                onClick={() => setSelectedTestimonial(null)}
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
                }}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div style={{ padding: "24px" }}>
              <p style={{ color: "#B6FF3C", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
                Detail Dokumentasi
              </p>
              <h3 style={{ color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", marginBottom: "10px" }}>
                {selectedTestimonial.name}
              </h3>
              <p style={{ color: "#A3A3A3", fontSize: "14px", lineHeight: 1.7 }}>{selectedTestimonial.detail}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
