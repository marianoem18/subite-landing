export default function BottomSheet({ title, children, footer }) {
  return (
    <section className="absolute inset-x-0 bottom-0 z-20 max-h-[70%] overflow-y-auto rounded-t-[28px] bg-white px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-5 shadow-[0_-10px_30px_rgba(20,40,80,0.12)]">
      {title ? (
        <header className="mb-4 text-center">
          <h1 className="font-display text-xl font-semibold text-ink">{title}</h1>
          <div className="mx-auto mt-3 h-px w-28 bg-neutral-300" />
        </header>
      ) : null}
      {children}
      {footer ? <div className="mt-4">{footer}</div> : null}
    </section>
  );
}
