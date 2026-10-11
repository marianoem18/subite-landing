import { useNavigate } from "react-router-dom";
import Vehicle from "../../components/ui/Vehicle";
import { arrivalLabel, categories, defaultDestination, routeCoords } from "../../data/mock";
import { useDemo } from "../../context/DemoContext";
import BottomSheet from "../components/BottomSheet";
import LocationFields from "../components/LocationFields";
import MapView from "../components/MapView";
import TripLayout from "../components/TripLayout";

export default function TipoScreen() {
  const navigate = useNavigate();
  const { trip, setTrip } = useDemo();

  const choose = (category) => {
    setTrip({
      category,
      option: null,
      destination: trip.destination || defaultDestination,
    });
    navigate(`/app/tarifas/${category}`);
  };

  return (
    <TripLayout
      onBack={() => navigate("/app/destino")}
      top={
        <LocationFields
          origin={trip.origin}
          destination={trip.destination}
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
          paddingBottomRight={[20, 320]}
        />
      }
      sheet={
        <BottomSheet title="Elegí tu viaje">
          <div className="flex flex-col gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => choose(category.id)}
                className="flex min-h-16 items-center justify-between rounded-2xl bg-brand px-5 py-4 text-left text-white"
              >
                <span className="font-display text-xl">{category.label}</span>
                <Vehicle type={category.id === "moto" ? "moto" : "auto"} />
              </button>
            ))}
          </div>
        </BottomSheet>
      }
    />
  );
}
