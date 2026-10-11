import { useNavigate } from "react-router-dom";
import { useToast } from "../../components/ui/Toast";

const items = [
  { id: "soporte", label: "Soporte", action: "soon" },
  { id: "ayuda", label: "Ayuda", action: "soon" },
  { id: "config", label: "Configuración", action: "config" },
  { id: "sitio", label: "Volver al sitio", action: "site" },
];

export default function SideMenu({ onClose, onConfig }) {
  const navigate = useNavigate();
  const toast = useToast();

  const choose = (item) => {
    if (item.action === "soon") {
      toast("Próximamente");
      onClose();
      return;
    }
    if (item.action === "config") {
      onConfig();
      return;
    }
    navigate("/");
  };

  return (
    <div className="absolute inset-0 z-40">
      <button
        type="button"
        aria-label="Cerrar menú"
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="absolute left-3 top-14 w-[62%] overflow-hidden rounded-md bg-brand py-1 text-white shadow-xl">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => choose(item)}
            className="block min-h-11 w-full px-4 py-2.5 text-left text-sm"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
