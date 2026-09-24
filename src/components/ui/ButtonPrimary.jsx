// ButtonPrimary — Pill button with green background
export default function ButtonPrimary({ children, onClick, className = "", type = "button", href }) {
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#B6FF3C] text-[#111111] font-semibold text-sm transition-all duration-200 hover:bg-[#8FD92F] hover:scale-105 active:scale-95 cursor-pointer ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
