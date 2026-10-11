import { Reveal } from "../useReveal";

const steps = [
  {
    n: "01",
    title: "Compará",
    text: "Mirá en el mismo momento las tarifas de Uber, DiDi y Cabify para el mismo recorrido.",
  },
  {
    n: "02",
    title: "Elegí",
    text: "Auto, moto, XL o confort. La opción más barata queda marcada para que no tengas que calcular.",
  },
  {
    n: "03",
    title: "Movete",
    text: "Pedí el viaje y seguilo en el mapa hasta que llegás a destino.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">Cómo funciona</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">
            Tres pasos. Un solo lugar.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <Reveal key={step.n}>
              <article className="h-full rounded-3xl bg-white p-6 shadow-sm">
                <p className="font-display text-sm font-semibold text-brand">{step.n}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
