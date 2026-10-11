import { useEffect, useMemo } from "react";
import { MapContainer, Marker, Polyline, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { pointAlong } from "../../lib/geo";

const baseTiles =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}";
const labelTiles =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}";

function FitRoute({ coords, paddingTopLeft, paddingBottomRight }) {
  const map = useMap();

  useEffect(() => {
    if (!coords?.length) return undefined;
    const timer = window.setTimeout(() => {
      map.invalidateSize();
      map.fitBounds(L.latLngBounds(coords), {
        paddingTopLeft,
        paddingBottomRight,
        animate: false,
      });
    }, 40);
    return () => window.clearTimeout(timer);
  }, [map, coords, paddingTopLeft, paddingBottomRight]);

  return null;
}

function Recenter({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    if (!center) return;
    map.setView(center, zoom, { animate: false });
  }, [map, center, zoom]);

  return null;
}

function destinationIcon(label) {
  return L.divIcon({
    className: "subite-divicon",
    html: `<div style="display:flex;flex-direction:column;align-items:center;transform:translate(-50%,-100%)">
      <div style="background:#fff;color:#1c2430;border-radius:12px;padding:6px 10px;font:600 12px/1.2 Inter,sans-serif;box-shadow:0 6px 16px rgba(20,32,64,.16);white-space:nowrap">Llegada ${label}</div>
      <div style="width:14px;height:14px;margin-top:6px;border-radius:3px;background:#1c2430"></div>
    </div>`,
    iconSize: [1, 1],
    iconAnchor: [0, 0],
  });
}

function carIcon(bearing) {
  return L.divIcon({
    className: "subite-divicon",
    html: `<div style="width:34px;height:34px;transform:rotate(${bearing}deg)">
      <svg viewBox="0 0 34 34" width="34" height="34">
        <circle cx="17" cy="17" r="16" fill="#fff" stroke="#254A96" stroke-width="1.5"/>
        <path d="M17 6l6 14h-4l-2 8-2-8h-4z" fill="#254A96"/>
      </svg>
    </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

function pinIcon() {
  return L.divIcon({
    className: "subite-divicon",
    html: `<div style="width:16px;height:16px;border-radius:999px;background:#254A96;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.25)"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

export default function MapView({
  coords,
  center,
  zoom = 15,
  progress = 0,
  showCar = false,
  showDestination = false,
  showPin = false,
  arrivalLabel = "",
  paddingTopLeft = [24, 24],
  paddingBottomRight = [24, 24],
}) {
  const start = coords?.[0] || center || [-26.824, -65.205];
  const car = useMemo(
    () => (coords ? pointAlong(coords, progress) : null),
    [coords, progress],
  );

  return (
    <MapContainer
      center={start}
      zoom={zoom}
      maxZoom={16}
      zoomControl={false}
      attributionControl
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="Tiles &copy; Esri"
        url={baseTiles}
        maxZoom={16}
      />
      <TileLayer url={labelTiles} maxZoom={16} />
      {coords?.length ? (
        <FitRoute
          coords={coords}
          paddingTopLeft={paddingTopLeft}
          paddingBottomRight={paddingBottomRight}
        />
      ) : null}
      {center && !coords ? <Recenter center={center} zoom={zoom} /> : null}
      {coords?.length > 1 ? (
        <Polyline
          positions={coords}
          pathOptions={{ color: "#254A96", weight: 5, opacity: 0.95 }}
        />
      ) : null}
      {showDestination && coords?.length ? (
        <Marker
          position={coords[coords.length - 1]}
          icon={destinationIcon(arrivalLabel)}
        />
      ) : null}
      {showPin && center ? <Marker position={center} icon={pinIcon()} /> : null}
      {showCar && car ? (
        <Marker position={car.point} icon={carIcon(car.bearing)} />
      ) : null}
    </MapContainer>
  );
}
