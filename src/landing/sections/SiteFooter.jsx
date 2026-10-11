import Logo from "../../components/brand/Logo";

export default function SiteFooter() {
  return (
    <footer className="bg-brand-deep px-5 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <Logo className="h-10" />
        <p className="max-w-3xl text-sm leading-relaxed text-white/75">
          Demo académica con datos simulados. Uber, DiDi y Cabify son marcas de sus
          respectivos dueños; Subite no está afiliada a ellas.
        </p>
        <p className="text-xs text-white/50">Versión 1.0 · San Miguel de Tucumán</p>
      </div>
    </footer>
  );
}
