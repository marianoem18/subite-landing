import { ChevronLeft, Menu } from "lucide-react";
import Logo from "../../components/brand/Logo";

export default function AppHeader({ onMenu, onBack }) {
  return (
    <header className="relative flex h-14 shrink-0 items-center justify-center bg-brand text-white">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          aria-label="Volver"
          className="absolute left-1 grid size-11 place-items-center rounded-full"
        >
          <ChevronLeft size={26} />
        </button>
      ) : (
        <button
          type="button"
          onClick={onMenu}
          aria-label="Abrir menú"
          className="absolute left-1 grid size-11 place-items-center rounded-full"
        >
          <Menu size={24} />
        </button>
      )}
      <Logo className="h-8" />
    </header>
  );
}
