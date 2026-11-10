import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomBar() {
  const navigate = useNavigate();
  return (
    <nav className="flex h-16 shrink-0 items-end justify-end bg-white px-8 pb-[max(8px,env(safe-area-inset-bottom))]">
      <button type="button" aria-label="Perfil" onClick={() => navigate("/app/perfil")} className="grid size-11 place-items-center text-brand">
        <User size={24} />
      </button>
    </nav>
  );
}
