import { cn } from "../../lib/cn";

function Mark({ tone = "light", className }) {
  const plate = tone === "light" ? "#F9FAFC" : "#254A96";
  const ink = tone === "light" ? "#254A96" : "#F9FAFC";

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <rect width="64" height="64" rx="16" fill={plate} />
      <path
        d="M17 46 C17 46 24 34 32 32 C40 30 38 22 47 16"
        fill="none"
        stroke={ink}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="17" cy="46" r="4.2" fill={ink} />
      <circle cx="32" cy="32" r="4.2" fill={ink} />
      <circle cx="47" cy="16" r="4.2" fill={ink} />
    </svg>
  );
}

export default function Logo({
  tone = "light",
  markOnly = false,
  className,
  markClassName = "size-11",
}) {
  const text = tone === "light" ? "text-white" : "text-brand";
  const slogan = tone === "light" ? "text-white/80" : "text-brand/70";

  if (markOnly) {
    return <Mark tone={tone} className={cn(markClassName, className)} />;
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark tone={tone} className={markClassName} />
      <span className="leading-none text-left">
        <span className={cn("block font-display text-[1.65rem] font-semibold tracking-tight", text)}>
          Subite
        </span>
        <span className={cn("mt-0.5 block text-[10px] font-medium tracking-wide", slogan)}>
          Compará, elegí y movete
        </span>
      </span>
    </span>
  );
}
