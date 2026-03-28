"use client";

interface AntSymbolProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function AntSymbol({ className = "", color = "#A65A3A", size = 48 }: AntSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`animate-float ${className}`}
      aria-label="Símbolo hormiga Raíz"
    >
      {/* Body segments */}
      <ellipse cx="50" cy="72" rx="12" ry="16" stroke={color} strokeWidth="1.5" fill="none" />
      <ellipse cx="50" cy="50" rx="8" ry="9" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="35" r="7" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Antennae */}
      <line x1="50" y1="28" x2="38" y2="15" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="50" y1="28" x2="62" y2="15" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="37" cy="14" r="1.5" fill={color} />
      <circle cx="63" cy="14" r="1.5" fill={color} />

      {/* Legs left */}
      <line x1="42" y1="48" x2="26" y2="40" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="42" y1="52" x2="22" y2="52" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="42" y1="56" x2="26" y2="66" stroke={color} strokeWidth="1.2" strokeLinecap="round" />

      {/* Legs right */}
      <line x1="58" y1="48" x2="74" y2="40" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="58" y1="52" x2="78" y2="52" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="58" y1="56" x2="74" y2="66" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
