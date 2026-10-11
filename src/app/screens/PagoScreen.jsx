import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import {
  arrivalLabel,
  defaultDestination,
  paymentMethods,
  prices,
  routeCoords,
} from "../../data/mock";
import { useDemo } from "../../context/DemoContext";
import BottomSheet from "../components/BottomSheet";
import MapView from "../components/MapView";
import TripLayout from "../components/TripLayout";

export default function PagoScreen() {
  const navigate = useNavigate();
  const { trip, setTrip } = useDemo();
  const scroller = useRef(null);
  const initial = Math.max(
    0,
    paymentMethods.findIndex((method) => method.id === trip.payment),
  );
  const [active, setActive] = useState(initial);

  const onScroll = () => {
    const node = scroller.current;
    if (!node) return;
    const index = Math.round(node.scrollLeft / node.clientWidth);
    const next = Math.min(paymentMethods.length - 1, Math.max(0, index));
    setActive(next);
    setTrip({ payment: paymentMethods[next].id });
  };

  const go = (index) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollTo({ left: index * node.clientWidth, behavior: "smooth" });
  };

  const fallback = prices[trip.category || "auto"][1];

  return (
    <TripLayout
      onBack={() => navigate(trip.category ? `/app/tarifas/${trip.category}` : "/app/tipo")}
      map={
        <MapView
          coords={routeCoords}
          showDestination
          arrivalLabel={arrivalLabel()}
          paddingTopLeft={[20, 80]}
          paddingBottomRight={[20, 300]}
        />
      }
      sheet={
        <BottomSheet
          title="Elegí tu mejor opción"
          footer={
            <Button
              variant="black"
              full
              onClick={() => {
                if (!trip.option) {
                  setTrip({
                    category: trip.category || "auto",
                    destination: trip.destination || defaultDestination,
                    option: { ...fallback, category: trip.category || "auto" },
                    payment: paymentMethods[active].id,
                  });
                }
                navigate("/app/buscando");
              }}
            >
              Pedir viaje
            </Button>
          }
        >
          <div
            ref={scroller}
            onScroll={onScroll}
            className="scrollbar-none flex snap-x snap-mandatory overflow-x-auto"
          >
            {paymentMethods.map((method) => (
              <article
                key={method.id}
                className="h-40 min-w-full snap-center rounded-xl bg-neutral-300 p-4"
              >
                <h2 className="font-display text-xl font-bold tracking-wide text-ink">
                  {method.label}
                </h2>
              </article>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-2">
            {paymentMethods.map((method, index) => (
              <button
                key={method.id}
                type="button"
                aria-label={method.label}
                onClick={() => go(index)}
                className={`size-2.5 rounded-full ${index === active ? "bg-neutral-600" : "bg-neutral-300"}`}
              />
            ))}
          </div>
        </BottomSheet>
      }
    />
  );
}
