// CardDark — Dark card with subtle border, rounded corners
export default function CardDark({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-[#1A1A1A] border border-[#2A2A2A] rounded-[20px] ${hover ? "transition-all duration-200 hover:scale-[1.02] hover:border-[#B6FF3C]/40" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
