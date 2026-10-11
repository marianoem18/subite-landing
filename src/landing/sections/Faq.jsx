import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../useReveal";

const items = [
  {
    q: "¿Qué es Subite?",
    a: "Es una app de movilidad urbana para comparar, en el mismo momento, opciones de transporte y sus tarifas en Tucumán.",
  },
  {
    q: "¿Los precios y los viajes son reales?",
    a: "No. Esta es una demo de muestra: los precios, el conductor y el recorrido están simulados. No se pide ningún viaje real.",
  },
  {
    q: "¿Está afiliada a Uber, DiDi o Cabify?",
    a: "No. Esos nombres se muestran solo para comparar. Subite no está afiliada a esas marcas y no usa sus logos.",
  },
  {
    q: "¿Necesito una cuenta para probarla?",
    a: "No. En el ingreso los datos ya están cargados. Con Entrar pasás directo a la demo.",
  },
  {
    q: "¿Funciona en todo el país?",
    a: "La demo está armada para San Miguel de Tucumán, que es donde se presenta.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="preguntas" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Preguntas</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Lo que suelen preguntar</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
          {items.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : index)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-display text-lg font-semibold">{item.q}</span>
                  <ChevronDown
                    className={`shrink-0 text-brand transition ${expanded ? "rotate-180" : ""}`}
                  />
                </button>
                {expanded ? <p className="pb-4 leading-relaxed text-neutral-600">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
