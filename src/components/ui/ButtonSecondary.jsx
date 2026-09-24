// ButtonSecondary — Pill button with outline style
export default function ButtonSecondary({ children, onClick, className = "", href }) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm transition-all duration-200 hover:border-[#B6FF3C] hover:text-[#B6FF3C] hover:scale-105 active:scale-95 cursor-pointer bg-transparent ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}
