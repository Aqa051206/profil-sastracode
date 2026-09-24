// SectionTitle — H2 with one highlighted word in green rounded background
export default function SectionTitle({ label, title, highlight, subtitle, center = false, light = false }) {
  const parts = title.split(highlight);
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      {label && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-[#B6FF3C]/10 text-[#B6FF3C] border border-[#B6FF3C]/20 mb-4">
          {label}
        </span>
      )}
      <h2
        className={`font-['Space_Grotesk'] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight ${light ? "text-[#111111]" : "text-white"}`}
      >
        {parts[0]}
        <span className="relative inline-block px-2 mx-1">
          <span className="relative z-10 text-[#111111]">{highlight}</span>
          <span
            className="absolute inset-0 rounded-lg"
            style={{ background: "#B6FF3C" }}
          />
        </span>
        {parts[1]}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-[#555]" : "text-[#A3A3A3]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
