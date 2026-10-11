export default function Vehicle({ type = "auto", className = "h-8 w-14" }) {
  if (type === "moto") {
    return (
      <svg viewBox="0 0 72 40" className={className} aria-hidden="true">
        <circle cx="16" cy="28" r="7" fill="#E8EEF8" stroke="#254A96" strokeWidth="2" />
        <circle cx="54" cy="28" r="7" fill="#E8EEF8" stroke="#254A96" strokeWidth="2" />
        <path
          d="M16 28h14l6-10h10l8 10"
          fill="none"
          stroke="#F9FAFC"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M36 18l-4-7h8" fill="none" stroke="#F9FAFC" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 78 40" className={className} aria-hidden="true">
      <path
        d="M10 26c2-8 8-12 16-13l10-1c8 0 14 3 20 8l8 6H10z"
        fill="#F4F7FC"
      />
      <path d="M28 14c2-3 5-4 9-4h8c3 2 5 5 6 8H26c0-1 .6-3 2-4z" fill="#9BB4DE" />
      <circle cx="24" cy="28" r="5" fill="#1C2430" />
      <circle cx="58" cy="28" r="5" fill="#1C2430" />
      <circle cx="24" cy="28" r="2" fill="#D5DCEA" />
      <circle cx="58" cy="28" r="2" fill="#D5DCEA" />
    </svg>
  );
}
