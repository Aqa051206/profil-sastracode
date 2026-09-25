import { useState } from "react";
import { faqs } from "../data";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      style={{
        border: isOpen ? "1px solid rgba(182,255,60,0.4)" : "1px solid #2A2A2A",
        borderRadius: "14px",
        overflow: "hidden",
        background: isOpen ? "#1A1A1A" : "#111",
        transition: "border-color 0.2s, background 0.2s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          gap: "16px",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            color: isOpen ? "#B6FF3C" : "#fff",
            transition: "color 0.2s",
          }}
        >
          {faq.question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: isOpen ? "#B6FF3C" : "#2A2A2A",
            color: isOpen ? "#111" : "#A3A3A3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: 300,
            transition: "background 0.2s, transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ⌵
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            padding: "0 24px 20px",
            color: "#A3A3A3",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section
      id="faq"
      style={{ background: "#0D0D0D", padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
            FAQ
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
            Pertanyaan yang{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ position: "relative", zIndex: 1, color: "#111" }}>Sering</span>
              <span style={{ position: "absolute", inset: "-2px -6px", background: "#B6FF3C", borderRadius: "8px", zIndex: 0 }} />
            </span>{" "}
            Ditanyakan
          </h2>
          <p style={{ color: "#A3A3A3", fontSize: "15px", lineHeight: 1.7 }}>
            Belum menemukan jawaban? Langsung hubungi kami.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
