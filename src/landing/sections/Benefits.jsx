import { Clock3, MapPinned, PiggyBank, Smartphone } from "lucide-react";
import { Reveal } from "../useReveal";

const benefits = [
  {
    icon: PiggyBank,
    title: "Ahorrás antes de pedir",
    text: "Ves la tarifa de cada app y la más baja queda señalada.",
  },
  {
    icon: Clock3,
    title: "Elegí la rapidez",
    text: "Dejás de abrir tres aplicaciones para hacer la misma pregunta.",
  },
  {
    icon: Smartphone,
    title: "Todo en un solo lugar",
    text: "Tipo de viaje, precio y pago, en una sola pantalla.",
  },
  {
    icon: MapPinned,
    title: "Pensado para Tucumán",
    text: "La demo recorre San Miguel de Tucumán, de Junín a San Martín.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Por qué Subite</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-bold md:text-4xl">
            ¿No sabés cuál es la mejor opción? Subite y enterate.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <Reveal key={benefit.title}>
              <article className="flex h-full gap-4 rounded-3xl bg-surface p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white">
                  <benefit.icon size={22} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-1 leading-relaxed text-neutral-600">{benefit.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
