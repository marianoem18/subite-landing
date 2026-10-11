import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import Vehicle from "../../components/ui/Vehicle";
import {
  arrivalLabel,
  categoryById,
  cheapest,
  defaultDestination,
  formatMoney,
  prices,
  routeCoords,
} from "../../data/mock";
import { useDemo } from "../../context/DemoContext";
import BottomSheet from "../components/BottomSheet";
import LocationFields from "../components/LocationFields";
import MapView from "../components/MapView";
import TripLayout from "../components/TripLayout";

export default function TarifasScreen() {
  const { categoria } = useParams();
  const navigate = useNavigate();
  const { trip, setTrip } = useDemo();
  const options = prices[categoria];
  const category = categoryById(categoria);

  useEffect(() => {
    if (!options) {
      navigate("/app/tipo", { replace: true });
      return;
    }
    if (trip.category !== categoria) {
      setTrip({ category: categoria, option: null, destination: trip.destination || defaultDestination });
    }
  }, [categoria, navigate, options, setTrip, trip.category, trip.destination]);

  if (!options || !category) return null;

  const best = cheapest(options);
  const selected = trip.option?.category === categoria ? trip.option : null;

  return (
    <TripLayout
      onBack={() => navigate("/app/tipo")}
      top={
        <LocationFields
          origin={trip.origin}
          destination={trip.destination || defaultDestination}
          onOrigin={(origin) => setTrip({ origin })}
          onDestination={(destination) => setTrip({ destination })}
        />
      }
      map={
        <MapView
          coords={routeCoords}
          showDestination
          arrivalLabel={arrivalLabel()}
          paddingTopLeft={[20, 120]}
          paddingBottomRight={[20, 340]}
        />
      }
      sheet={
        <BottomSheet
          title="Elegí tu mejor opción"
          footer={
            <Button
              variant="black"
              full
              disabled={!selected}
              onClick={() => navigate("/app/pago")}
            >
              Elegir método de pago
            </Button>
          }
        >
          <div className="flex flex-col gap-3">
            {options.map((option) => {
              const active = selected?.app === option.app;
              const isBest = option.price === best.price;
              return (
                <button
                  key={option.app}
                  type="button"
                  onClick={() =>
                    setTrip({
                      category: categoria,
                      destination: trip.destination || defaultDestination,
                      option: { ...option, category: categoria },
                    })
                  }
                  className={`relative flex min-h-16 items-center gap-2 rounded-2xl bg-brand px-4 py-3 text-left text-white ${active ? "ring-4 ring-brand ring-offset-2 ring-offset-white" : ""}`}
                >
                  {isBest ? (
                    <span className="absolute -top-2 right-4 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-brand">
                      Más barato
                    </span>
                  ) : null}
                  <span className="min-w-0 flex-1 font-display text-lg leading-tight">
                    {option.app} {category.cardLabel}
                  </span>
                  <Vehicle type={categoria === "moto" ? "moto" : "auto"} className="h-7 w-12 shrink-0" />
                  <span className="shrink-0 text-sm font-semibold tabular-nums">
                    {formatMoney(option.price)}
                  </span>
                </button>
              );
            })}
          </div>
        </BottomSheet>
      }
    />
  );
}
