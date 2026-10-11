import { Link } from "react-router-dom";
import PhoneFrame from "./PhoneFrame";

export default function Hero() {
  return (
    <section id="inicio" className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Movilidad urbana en Tucumán
          </p>
          <h1 className="mt-3 font-display text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Compará, elegí y movete
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Compará en un solo lugar las tarifas de Uber, DiDi y Cabify y encontrá
            la alternativa que mejor se adapte a vos.
          </p>
          <p className="mt-3 text-sm font-medium text-white/70">Un click, todas las opciones</p>
          <Link
            to="/app/login"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 font-display text-base font-semibold text-brand"
          >
            Probá nuestra app
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-[280px]">
          <img
            src="/img/hero-illustration.jpg"
            alt=""
            className="pointer-events-none absolute -left-10 -top-8 hidden w-40 mix-blend-screen md:block"
          />
          <PhoneFrame
            priority
            src="/screens/tarifas.jpg"
            alt="Pantalla de Subite comparando tarifas de Uber, DiDi y Cabify"
          />
        </div>
      </div>
    </section>
  );
}
