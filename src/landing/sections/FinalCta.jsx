import { Link } from "react-router-dom";
import { Reveal } from "../useReveal";

export default function FinalCta() {
  return (
    <section className="bg-surface px-5 py-16 md:py-24">
      <Reveal className="mx-auto max-w-4xl">
        <div className="rounded-[32px] bg-brand px-6 py-12 text-center text-white md:px-12">
          <h2 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Elegí la rapidez, elegí Subite
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Abrí la demo y pedí un viaje de punta a punta. Todo pasa en el celular, con datos de muestra.
          </p>
          <Link
            to="/app/login"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-display text-base font-semibold text-brand"
          >
            Probá nuestra app
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
