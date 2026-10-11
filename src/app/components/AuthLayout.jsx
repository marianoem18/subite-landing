import Logo from "../../components/brand/Logo";

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <header className="flex justify-center rounded-b-[36px] bg-brand px-6 pb-8 pt-12">
        <Logo className="h-16" />
      </header>
      <div className="flex flex-1 flex-col px-6 pt-8">{children}</div>
      <p className="pb-8 text-center text-sm text-ink">Versión 1.0</p>
    </div>
  );
}
