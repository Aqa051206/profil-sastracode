import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email) setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{ background: "#0D0D0D", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Big green CTA card */}
        <div
          style={{
            background: "#B6FF3C",
            borderRadius: "36px",
            padding: "72px 64px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(182,255,60,0.2)",
          }}
        >
          {/* Deco circles */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "#8FD92F",
              opacity: 0.3,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "-60px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "#111",
              opacity: 0.08,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexWrap: "wrap",
              gap: "48px",
              alignItems: "flex-start",
            }}
          >
            {/* Left text */}
            <div style={{ flex: "1 1 300px" }}>
              <p
                style={{
                  color: "rgba(17,17,17,0.6)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                ✦ Get in Touch Today!
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "#111",
                  lineHeight: 1.15,
                  marginBottom: "20px",
                }}
              >
                Siap Mewujudkan<br />
                Proyek Impian Anda?
              </h2>
              <p
                style={{
                  color: "rgba(17,17,17,0.65)",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  maxWidth: "380px",
                  marginBottom: "36px",
                }}
              >
                Ceritakan ide Anda kepada saya. Saya akan membantu menemukan solusi teknologi terbaik
                yang sesuai kebutuhan dan anggaran Anda.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a
                  href="sastracode8@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#111",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "34px",
                      height: "34px",
                      background: "rgba(17,17,17,0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                    }}
                  >
                    📧
                  </span>
                  sastracode8@gmail.com
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#111",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: "34px",
                      height: "34px",
                      background: "rgba(17,17,17,0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                    }}
                  >
                    💬
                  </span>
                  +62 812-3456-7890
                </a>
              </div>
            </div>

            {/* Right form */}
            <div style={{ flex: "1 1 320px", minWidth: "280px" }}>
              {submitted ? (
                <div
                  style={{
                    background: "rgba(17,17,17,0.1)",
                    borderRadius: "20px",
                    padding: "48px 32px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: "#111", marginBottom: "8px" }}>
                    Terima kasih!
                  </h3>
                  <p style={{ color: "rgba(17,17,17,0.65)", fontSize: "14px", lineHeight: 1.6 }}>
                    Pesan Anda sudah diterima. Saya akan menghubungi Anda segera!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "rgba(17,17,17,0.1)",
                    borderRadius: "20px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {[
                    { key: "name", label: "Nama Anda", type: "text", placeholder: "John Doe" },
                    { key: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label
                        style={{
                          display: "block",
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#111",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          marginBottom: "8px",
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.key === "email"}
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        style={{
                          width: "100%",
                          background: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(17,17,17,0.15)",
                          borderRadius: "12px",
                          padding: "12px 16px",
                          fontSize: "14px",
                          color: "#111",
                          outline: "none",
                          boxSizing: "border-box",
                          fontFamily: "Inter, sans-serif",
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#111",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      Pesan / Kebutuhan
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ceritakan proyek atau kebutuhan Anda..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.8)",
                        border: "1px solid rgba(17,17,17,0.15)",
                        borderRadius: "12px",
                        padding: "12px 16px",
                        fontSize: "14px",
                        color: "#111",
                        outline: "none",
                        resize: "none",
                        boxSizing: "border-box",
                        fontFamily: "Inter, sans-serif",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: "#111",
                      color: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      padding: "14px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "background 0.2s, transform 0.2s",
                      fontFamily: "Inter, sans-serif",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#0D0D0D"; e.currentTarget.style.transform = "scale(1.02)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    Kirim Pesan →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
