// Badge — Pill badge with green accent
export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-[#B6FF3C]/10 text-[#B6FF3C] border border-[#B6FF3C]/20 ${className}`}
    >
      {children}
    </span>
  );
}
