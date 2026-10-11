import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/brand/Logo";
import Apps from "./sections/Apps";
import Benefits from "./sections/Benefits";
import Faq from "./sections/Faq";
import FinalCta from "./sections/FinalCta";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Screenshots from "./sections/Screenshots";
import SiteFooter from "./sections/SiteFooter";
import StickyCta from "./sections/StickyCta";

const nav = [
  ["#como-funciona", "Cómo funciona"],
  ["#beneficios", "Beneficios"],
  ["#apps", "Apps"],
  ["#preguntas", "Preguntas"],
];

export default function LandingPage() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setSticky(!entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-24 md:pb-0">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-brand"
      >
        Saltar al contenido
      </a>
      <header className="sticky top-0 z-30 bg-brand text-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" aria-label="Subite, inicio">
            <Logo alt="" className="h-9" />
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Secciones">
            {nav.map(([href, label]) => (
              <a key={href} href={href} className="text-white/85 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <Link
            to="/app/login"
            className="hidden min-h-10 items-center rounded-full bg-white px-4 font-display text-sm font-semibold text-brand md:inline-flex"
          >
            Probá nuestra app
          </Link>
        </div>
      </header>
      <main id="contenido">
        <Hero />
        <HowItWorks />
        <Benefits />
        <Apps />
        <Screenshots />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta visible={sticky} />
    </div>
  );
}
