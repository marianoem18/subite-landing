export default function Modal({ open, title, children }) {
  if (!open) return null;

  return (
    <dialog
      open
      aria-labelledby="modal-title"
      className="absolute inset-0 z-[70] m-0 flex h-full max-h-none w-full max-w-none items-center justify-center border-0 bg-black/25 px-8"
    >
      <div className="w-full max-w-xs overflow-hidden rounded-[28px] bg-white shadow-2xl">
        {title ? (
          <h2
            id="modal-title"
            className="px-4 py-4 text-center font-display text-lg font-semibold text-brand"
          >
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </dialog>
  );
}
