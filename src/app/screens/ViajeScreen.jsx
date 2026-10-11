import { useEffect, useState } from "react";
import { MessageCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useToast } from "../../components/ui/Toast";
import {
  arrivalLabel,
  defaultDestination,
  driver,
  routeCoords,
} from "../../data/mock";
import { useDemo } from "../../context/DemoContext";
import BottomSheet from "../components/BottomSheet";
import MapView from "../components/MapView";
import RouteSummary from "../components/RouteSummary";
import TripLayout from "../components/TripLayout";

export default function ViajeScreen() {
  const navigate = useNavigate();
  const toast = useToast();
  const { trip, resetTrip } = useDemo();
  const [progress, setProgress] = useState(0);
  const [arrived, setArrived] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      const timer = window.setTimeout(() => setArrived(true), 700);
      return () => window.clearTimeout(timer);
    }

    let start;
    let frame;
    const duration = 12000;
    const tick = (now) => {
      if (!start) start = now;
      const next = Math.min(1, (now - start) / duration);
      setProgress(next);
      if (next < 1) frame = window.requestAnimationFrame(tick);
      else setArrived(true);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const finish = (stars) => {
    setRating(stars);
    window.setTimeout(() => {
      resetTrip();
      navigate("/app");
    }, 450);
  };

  return (
    <TripLayout
      onBack={() => navigate("/app")}
      map={
        <MapView
          coords={routeCoords}
          showCar
          progress={progress}
          showDestination
          arrivalLabel={arrivalLabel(Math.max(1, Math.round(18 * (1 - progress))))}
          paddingTopLeft={[20, 80]}
          paddingBottomRight={[20, 300]}
        />
      }
      sheet={
        <BottomSheet>
          <h1 className="mb-4 font-display text-3xl font-bold text-brand">Viaje aceptado</h1>
          <RouteSummary
            origin={trip.origin}
            destination={trip.destination || defaultDestination}
          />
          <div className="mt-5 flex items-center gap-3 rounded-full bg-brand px-3 py-2 text-white">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-neutral-400 text-sm font-semibold text-white">
              VG
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold leading-tight">{driver.name}</span>
              <span className="block text-xs text-white/80">+{driver.trips} viajes</span>
            </span>
            <button
              type="button"
              aria-label="Enviar mensaje"
              onClick={() => toast("Próximamente")}
              className="grid size-11 place-items-center"
            >
              <MessageCircle size={20} />
            </button>
          </div>
        </BottomSheet>
      }
      overlay={
        arrived ? (
          <dialog
            open
            aria-labelledby="llegada-titulo"
            className="absolute inset-0 z-40 m-0 flex h-full max-h-none w-full max-w-none items-end justify-center border-0 bg-black/25 p-4 pb-8"
          >
            <div className="w-full rounded-[28px] bg-white px-5 py-6 text-center shadow-2xl">
              <h2 id="llegada-titulo" className="font-display text-2xl font-bold text-brand">
                Llegaste a destino
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                ¿Cómo estuvo el viaje con {driver.name}?
              </p>
              <div className="mt-4 flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    aria-label={`${star} estrellas`}
                    onClick={() => finish(star)}
                    className="grid size-11 place-items-center"
                  >
                    <Star
                      size={28}
                      className={star <= rating ? "fill-brand text-brand" : "text-brand"}
                    />
                  </button>
                ))}
              </div>
              <Button variant="brand" full className="mt-2" onClick={() => finish(rating || 5)}>
                Volver al inicio
              </Button>
            </div>
          </dialog>
        ) : null
      }
    />
  );
}
