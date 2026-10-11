import { cn } from "../../lib/cn";

export default function Logo({ className, alt = "Subite" }) {
  return (
    <img
      src="/img/logo.png"
      alt={alt}
      width="656"
      height="202"
      className={cn("h-12 w-auto", className)}
    />
  );
}
