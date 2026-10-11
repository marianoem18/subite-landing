export default function RouteSummary({ origin, destination }) {
  return (
    <div className="space-y-4 border-l-2 border-brand pl-4">
      <div className="relative">
        <span className="absolute -left-[21px] top-1 size-2.5 rounded-full bg-brand" />
        <p className="text-sm font-semibold">Desde</p>
        <p className="text-sm leading-snug text-neutral-700">{origin}</p>
      </div>
      <div className="relative">
        <span className="absolute -left-[21px] top-1 size-2.5 rounded-full bg-brand" />
        <p className="text-sm font-semibold">Hasta</p>
        <p className="text-sm leading-snug text-neutral-700">{destination}</p>
      </div>
    </div>
  );
}
