// CardLight — Light surface card with soft shadow
export default function CardLight({ children, className = "" }) {
  return (
    <div
      className={`bg-[#F5F5F0] rounded-[24px] transition-all duration-200 hover:scale-[1.02] ${className}`}
      style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
    >
      {children}
    </div>
  );
}
