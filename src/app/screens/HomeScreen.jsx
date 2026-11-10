import { useMemo, useState } from "react";
import { MapPin, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import BottomBar from "../components/BottomBar";
import ConfigDrawer from "../components/ConfigDrawer";
import MapView from "../components/MapView";
import SideMenu from "../components/SideMenu";
import { defaultOrigin, previousLocations } from "../../data/mock";
import { useDemo } from "../../context/DemoContext";

export default function HomeScreen() {
  const navigate = useNavigate();
  const { setTrip } = useDemo();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [configSection, setConfigSection] = useState("root");
  const [index, setIndex] = useState(0);
  const location = previousLocations[index];
  const previewRoute = useMemo(() => {
    const [lat, lng] = location.center;
    return [[lat + 0.004, lng - 0.004], [lat + 0.002, lng - 0.004], [lat + 0.002, lng - 0.002], [lat, lng - 0.002], location.center];
  }, [location]);

  const goToDestination = (address) => {
    setTrip({
      origin: defaultOrigin,
      destination: address || "",
      category: null,
      option: null,
    });
    navigate("/app/destino");
  };

  const onTouchStart = (event) => {
    event.currentTarget.dataset.x = String(event.touches[0].clientX);
  };

  const onTouchEnd = (event) => {
    const start = Number(event.currentTarget.dataset.x || 0);
    const delta = event.changedTouches[0].clientX - start;
    if (delta < -40) setIndex((current) => Math.min(previousLocations.length - 1, current + 1));
    if (delta > 40) setIndex((current) => Math.max(0, current - 1));
  };

  return (
    <div className="relative flex h-dvh flex-col bg-white">
      <AppHeader
        onMenu={() => {
          setConfigOpen(false);
          setMenuOpen((open) => !open);
        }}
      />
      <div className="px-4 pt-4">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            goToDestination(query.trim());
          }}
          className="flex h-12 items-center gap-2 rounded-xl bg-input-muted px-3 text-brand"
        >
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Indicá tu destino"
            aria-label="Indicá tu destino"
            className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-neutral-500"
          />
          {query ? (
            <button
              type="button"
              aria-label="Borrar destino"
              onClick={() => setQuery("")}
              className="grid size-8 place-items-center"
            >
              <X size={16} />
            </button>
          ) : null}
        </form>
      </div>

      <div
        className="mt-4"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          onClick={() => goToDestination(location.address)}
          className="flex h-14 w-full items-center gap-2 bg-brand px-4 text-left text-lg font-medium text-white"
        >
          <MapPin size={20} aria-hidden="true" />
          {location.address.split(",")[0]}
        </button>
        <div className="h-[42vh] bg-neutral-300">
          <MapView
            key={location.id}
            coords={previewRoute}
            showDestination
            arrivalLabel="5 min"
          />
        </div>
        <div className="flex justify-center gap-2 py-3">
          {previousLocations.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.address}
              aria-current={itemIndex === index ? "true" : undefined}
              onClick={() => setIndex(itemIndex)}
              className={`size-3 rounded-full ${itemIndex === index ? "bg-brand" : "bg-brand/50"}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <BottomBar />
      </div>

      {menuOpen ? (
        <SideMenu
          onClose={() => setMenuOpen(false)}
          onConfig={(section = "root") => {
            setMenuOpen(false);
            setConfigSection(section);
            setConfigOpen(true);
          }}
        />
      ) : null}
      {configOpen ? <ConfigDrawer initialSection={configSection} onClose={() => setConfigOpen(false)} /> : null}
    </div>
  );
}
