import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { arrivalLabel, defaultDestination, routeCoords } from "../../data/mock";
import { useDemo } from "../../context/DemoContext";
import LocationFields from "../components/LocationFields";
import MapView from "../components/MapView";
import TripLayout from "../components/TripLayout";

export default function DestinoScreen() {
  const navigate = useNavigate();
  const { trip, setTrip } = useDemo();
  const destination = trip.destination || "";
  const ready = Boolean(trip.origin.trim() && destination.trim());

  return (
    <TripLayout
      onBack={() => navigate("/app")}
      top={
        <LocationFields
          origin={trip.origin}
          destination={destination}
          onOrigin={(origin) => setTrip({ origin })}
          onDestination={(value) => setTrip({ destination: value })}
        />
      }
      map={
        <MapView
          coords={routeCoords}
          showCar
          progress={0}
          showDestination
          arrivalLabel={arrivalLabel()}
          paddingTopLeft={[20, 120]}
          paddingBottomRight={[20, 110]}
        />
      }
      cta={
        <Button
          variant="black"
          full
          disabled={!ready}
          onClick={() => {
            if (!trip.destination) setTrip({ destination: defaultDestination });
            navigate("/app/tipo");
          }}
        >
          Continuar
        </Button>
      }
    />
  );
}
