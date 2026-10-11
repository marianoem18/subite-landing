import { House, Search, X } from "lucide-react";

function Field({ icon, value, onChange, placeholder, label }) {
  return (
    <label className="flex h-12 items-center gap-2 rounded-xl bg-brand px-3 text-white">
      <span className="grid size-6 shrink-0 place-items-center">{icon}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
        className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-white/80"
      />
      {value ? (
        <button
          type="button"
          aria-label={`Borrar ${label}`}
          onClick={() => onChange("")}
          className="grid size-8 place-items-center"
        >
          <X size={16} />
        </button>
      ) : null}
    </label>
  );
}

export default function LocationFields({
  origin,
  destination,
  onOrigin,
  onDestination,
}) {
  return (
    <div className="flex flex-col gap-2">
      <Field
        icon={<House size={18} />}
        value={origin}
        onChange={onOrigin}
        placeholder="Punto de partida"
        label="Punto de partida"
      />
      <Field
        icon={<Search size={18} />}
        value={destination}
        onChange={onDestination}
        placeholder="Indicá tu destino"
        label="Destino"
      />
    </div>
  );
}
