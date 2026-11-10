import { useState } from "react";
import { ChevronRight, CircleUserRound } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDemo } from "../../context/DemoContext";
import AppHeader from "../components/AppHeader";
import Modal from "../../components/ui/Modal";

const samples = {
  viajes: ["Junín 453|28/08/26|$5.454", "Marcos Paz 1533|15/08/26|$8.325", "Vélez Sarsfield 264|14/08/26|$3.200", "Congreso 466|05/08/26|$4.123"],
  pagos: ["Tarjeta finalizada en 5646 - Débito", "Tarjeta finalizada en 1598 - Crédito", "Tarjeta finalizada en 5484 - Mercado Pago"],
  favoritos: ["Casa - Calle San Francisco", "Estudios - Junín 674", "Trabajo - Vélez Sarsfield 264"],
};
const titles = { viajes: "Mis viajes", pagos: "Métodos de pago", favoritos: "Favoritos" };

export default function PerfilScreen() {
  const navigate = useNavigate();
  const { section } = useParams();
  const { session, logout } = useDemo();
  const [confirm, setConfirm] = useState(false);
  const entries = samples[section];
  return (
    <div className="min-h-dvh bg-white">
      <AppHeader onBack={() => navigate(section ? "/app/perfil" : "/app")} />
      {entries ? (
        <div className="p-3">
          <h1 className="rounded-lg bg-brand px-5 py-4 text-sm text-white">{titles[section]}</h1>
          <p className="px-2 pt-3 text-xs text-neutral-500">Datos de muestra</p>
          {entries.map((entry) => {
            const [name, date, price] = entry.split("|");
            return <div key={entry} className="mt-3 flex items-center justify-between rounded-2xl bg-brand px-5 py-4 text-sm text-white"><span>{name}{date && <span className="mt-1 block text-xs">{date}</span>}</span>{price && <span>{price}</span>}{section === "favoritos" && <span aria-hidden="true">★</span>}</div>;
          })}
        </div>
      ) : (
        <div className="px-4 pb-6">
          <div className="flex flex-col items-center py-8 text-brand"><CircleUserRound size={120} strokeWidth={1.5} /><h1 className="mt-2 font-display font-bold">{session.nombre} {session.apellido}</h1><p className="text-xs">{session.email}</p></div>
          {Object.entries(titles).map(([key, title]) => <button key={key} type="button" onClick={() => navigate(`/app/perfil/${key}`)} className="mb-3 flex min-h-14 w-full items-center justify-between bg-brand px-5 text-left text-sm text-white">{title}<ChevronRight size={20} /></button>)}
          <button type="button" onClick={() => setConfirm(true)} className="flex min-h-14 w-full items-center justify-between bg-brand px-5 text-sm text-white">Cerrar sesión<ChevronRight size={20} /></button>
        </div>
      )}
      <Modal open={confirm} title="Cerrar sesión"><div className="grid grid-cols-2 border-t border-neutral-200"><button type="button" onClick={() => setConfirm(false)} className="min-h-12 border-r text-brand">NO</button><button type="button" onClick={() => { logout(); navigate("/app/login"); }} className="min-h-12 text-brand">SÍ</button></div></Modal>
    </div>
  );
}
