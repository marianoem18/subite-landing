import Logo from "../../components/brand/Logo";

export default function SiteFooter() {
  return (
    <footer className="bg-brand-deep px-5 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <img
          src="/img/footer-banner.png"
          alt="Subite: compará, elegí y movete"
          className="h-auto w-full max-w-[560px]"
        />
        <div className="flex w-full flex-col gap-3 border-t border-white/15 pt-5 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-9" />
            <p className="max-w-2xl text-sm leading-relaxed text-white/75">
              Demo académica con datos simulados. Uber, DiDi y Cabify son marcas de sus
              respectivos dueños; Subite no está afiliada a ellas.
            </p>
          </div>
          <p className="text-xs text-white/50">Versión 1.0 · San Miguel de Tucumán</p>
        </div>
      </div>
    </footer>
  );
}
