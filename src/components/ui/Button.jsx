import { cn } from "../../lib/cn";

const variants = {
  black: "bg-black text-white",
  brand: "bg-brand text-white",
  light: "bg-white text-brand",
};

export default function Button({
  variant = "brand",
  full = false,
  disabled = false,
  className,
  children,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-center font-display text-base font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed",
        full && "w-full text-lg",
        disabled ? "bg-[#4F4F4F] text-white" : variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
