import PhoneFrame from "./PhoneFrame";
import { Reveal } from "../useReveal";

const shots = [
  { src: "/screens/login.jpg", alt: "Pantalla de ingreso a Subite", caption: "Ingreso" },
  { src: "/screens/destino.jpg", alt: "Mapa con el recorrido del viaje", caption: "Recorrido" },
  { src: "/screens/tipo.jpg", alt: "Elección entre auto, moto, XL y confort", caption: "Tipo de viaje" },
  { src: "/screens/tarifas.jpg", alt: "Comparación de tarifas de auto", caption: "Tarifas" },
  { src: "/screens/pago.jpg", alt: "Selección del método de pago", caption: "Pago" },
  { src: "/screens/buscando.jpg", alt: "Pantalla buscando conductor", caption: "Buscando" },
  { src: "/screens/viaje.jpg", alt: "Viaje aceptado con la conductora asignada", caption: "En viaje" },
];

export default function Screenshots() {
  return (
    <section id="capturas" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">La app</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Así se ve Subite</h2>
        </Reveal>
      </div>
      <div className="scrollbar-none mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2">
        {shots.map((shot) => (
          <figure key={shot.src} className="w-[210px] shrink-0 snap-center md:w-[230px]">
            <PhoneFrame src={shot.src} alt={shot.alt} />
            <figcaption className="mt-3 text-center text-sm font-medium text-neutral-600">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
