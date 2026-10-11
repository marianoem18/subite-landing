import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
      },
      { threshold: 0.18 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, shown];
}

export function Reveal({ children, className = "" }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={`reveal-base ${shown ? "is-in" : ""} ${className}`}>
      {children}
    </div>
  );
}
