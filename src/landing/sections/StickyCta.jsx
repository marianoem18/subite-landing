import { Link } from "react-router-dom";

export default function StickyCta({ visible }) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand/10 bg-white/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <Link
        to="/app/login"
        className="flex min-h-12 items-center justify-center rounded-full bg-brand font-display font-semibold text-white"
      >
        Probá nuestra app
      </Link>
    </div>
  );
}
