import { Outlet } from "react-router-dom";

export default function AppShell() {
  return (
    <div className="flex min-h-dvh justify-center bg-brand">
      <div className="relative min-h-dvh w-full max-w-[430px] bg-white">
        <Outlet />
      </div>
    </div>
  );
}
