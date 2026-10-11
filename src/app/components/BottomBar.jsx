import { ArrowLeftRight, House, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { links } from "../../config/links";

function Slot({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-11 place-items-center text-brand"
    >
      {children}
    </button>
  );
}

export default function BottomBar() {
  const navigate = useNavigate();

  const open = (target) => {
    if (target) navigate(target);
  };

  return (
    <nav className="flex h-16 shrink-0 items-end justify-between bg-white px-8 pb-[max(8px,env(safe-area-inset-bottom))]">
      <Slot label="Inicio" onClick={() => navigate("/app")}>
        <House size={24} />
      </Slot>
      <Slot label="Mis viajes" onClick={() => open(links.viajes)}>
        <ArrowLeftRight size={24} />
      </Slot>
      <Slot label="Perfil" onClick={() => open(links.perfil)}>
        <User size={24} />
      </Slot>
    </nav>
  );
}
