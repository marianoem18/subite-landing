import { cn } from "../../lib/cn";

const tones = {
  soft: "bg-input-soft text-white placeholder:text-white/90",
  strong: "bg-input-strong text-white placeholder:text-white/90",
  muted: "bg-neutral-200 text-neutral-600 placeholder:text-neutral-500",
};

export default function Input({
  tone = "soft",
  className,
  label,
  ...props
}) {
  return (
    <input
      aria-label={label || props.placeholder}
      className={cn(
        "w-full min-h-12 rounded-2xl px-5 py-3 text-base outline-none",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
