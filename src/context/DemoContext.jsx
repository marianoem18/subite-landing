import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultSettings, defaultTrip, demoUser } from "../data/mock";

const DemoContext = createContext(null);

const SESSION_KEY = "subite-session";
const SETTINGS_KEY = "subite-settings";
const TRIP_KEY = "subite-trip";

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

export function DemoProvider({ children }) {
  const [session, setSession] = useState(() =>
    load(SESSION_KEY, { loggedIn: false }),
  );
  const [settings, setSettings] = useState(() =>
    load(SETTINGS_KEY, defaultSettings),
  );
  const [trip, setTripState] = useState(() => load(TRIP_KEY, defaultTrip));

  useEffect(() => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }, [session]);

  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(TRIP_KEY, JSON.stringify(trip));
  }, [trip]);

  const api = useMemo(() => {
    const login = (data = {}) => {
      setSession({
        loggedIn: true,
        nombre: data.nombre || demoUser.nombre,
        apellido: data.apellido || demoUser.apellido,
        usuario: data.usuario || demoUser.usuario,
        email: data.email || demoUser.email,
      });
    };

    const logout = () => setSession({ loggedIn: false });

    const setTrip = (partial) =>
      setTripState((current) => ({ ...current, ...partial }));

    const resetTrip = () => setTripState(defaultTrip);

    const updateSettings = (partial) =>
      setSettings((current) => ({ ...current, ...partial }));

    return {
      session,
      login,
      logout,
      trip,
      setTrip,
      resetTrip,
      settings,
      updateSettings,
    };
  }, [session, settings, trip]);

  return <DemoContext.Provider value={api}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const value = useContext(DemoContext);
  if (!value) {
    throw new Error("useDemo debe usarse dentro de DemoProvider");
  }
  return value;
}
