export default function Toggle({ label, value, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      aria-pressed={value}
      className="flex min-h-11 w-full items-center justify-between gap-3 py-2 text-left text-sm text-white"
    >
      <span>{label}</span>
      <span className="font-semibold tracking-wide">{value ? "SÍ" : "NO"}</span>
    </button>
  );
}
