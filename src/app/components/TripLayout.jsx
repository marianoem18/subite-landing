import AppHeader from "./AppHeader";

export default function TripLayout({ onBack, top, map, sheet, cta, overlay }) {
  return (
    <div className="relative flex h-dvh flex-col bg-white">
      <AppHeader onBack={onBack} />
      <div className="relative min-h-0 flex-1">
        <div className="absolute inset-0">{map}</div>
        {top ? <div className="absolute inset-x-3 top-3 z-10">{top}</div> : null}
        {sheet}
        {cta ? (
          <div className="absolute inset-x-4 bottom-[max(16px,env(safe-area-inset-bottom))] z-30">
            {cta}
          </div>
        ) : null}
      </div>
      {overlay}
    </div>
  );
}
