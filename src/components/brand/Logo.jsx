import { cn } from "../../lib/cn";

export default function Logo({ className, alt = "Subite" }) {
  return (
    <img
      src="/img/logo.png"
      alt={alt}
      width="148"
      height="148"
      className={cn("h-12 w-auto", className)}
    />
  );
}
