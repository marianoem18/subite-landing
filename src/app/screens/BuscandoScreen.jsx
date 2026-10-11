import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  arrivalLabel,
  defaultDestination,
  formatMoney,
  prices,
  routeCoords,
} from "../../data/mock";
import { useDemo } from "../../context/DemoContext";
import BottomSheet from "../components/BottomSheet";
import MapView from "../components/MapView";
import RouteSummary from "../components/RouteSummary";
import TripLayout from "../components/TripLayout";

export default function BuscandoScreen() {
  const navigate = useNavigate();
  const { trip } = useDemo();
  const option = trip.option || { ...prices.auto[1], category: "auto" };

  useEffect(() => {
    const timer = window.setTimeout(() => navigate("/app/viaje"), 3000);
    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <TripLayout
      onBack={() => navigate("/app/pago")}
      map={
        <MapView
          coords={routeCoords}
          showCar
          progress={0}
          showDestination
          arrivalLabel={arrivalLabel()}
          paddingTopLeft={[20, 80]}
          paddingBottomRight={[20, 280]}
        />
      }
      sheet={
        <BottomSheet title="Buscando un conductor">
          <RouteSummary
            origin={trip.origin}
            destination={trip.destination || defaultDestination}
          />
          <div className="mt-5 flex min-h-12 items-center justify-between rounded-full bg-brand px-5 py-3 text-white">
            <span className="font-display text-base">Viaje elegido</span>
            <span className="font-semibold tabular-nums">{formatMoney(option.price)}</span>
          </div>
          <p className="mt-3 text-center text-sm text-neutral-500">
            Asignando conductor
            <span className="dot-pulse">...</span>
          </p>
        </BottomSheet>
      }
    />
  );
}
