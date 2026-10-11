import { Reveal } from "../useReveal";

const apps = ["Uber", "DiDi", "Cabify"];
const types = ["Auto", "Moto", "XL", "Confort"];

export default function Apps() {
  return (
    <section id="apps" className="bg-brand py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
            Qué compara
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Elegí la rapidez, elegí Subite
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Los nombres aparecen solo como referencia. Subite no usa los logos oficiales
            ni está afiliada a esas plataformas.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {apps.map((app) => (
            <Reveal key={app}>
              <p className="rounded-2xl bg-white/10 px-5 py-6 text-center font-display text-2xl font-semibold">
                {app}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {types.map((type) => (
            <span key={type} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand">
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
