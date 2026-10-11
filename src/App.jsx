import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./app/AppShell";
import RequireAuth from "./app/RequireAuth";
import LandingPage from "./landing/LandingPage";

const LoginScreen = lazy(() => import("./app/screens/auth/LoginScreen"));
const RegisterScreen = lazy(() => import("./app/screens/auth/RegisterScreen"));
const ForgotScreen = lazy(() => import("./app/screens/auth/ForgotScreen"));
const CodeScreen = lazy(() => import("./app/screens/auth/CodeScreen"));
const NewPasswordScreen = lazy(() => import("./app/screens/auth/NewPasswordScreen"));
const ChangePasswordScreen = lazy(() => import("./app/screens/auth/ChangePasswordScreen"));
const HomeScreen = lazy(() => import("./app/screens/HomeScreen"));
const DestinoScreen = lazy(() => import("./app/screens/DestinoScreen"));
const TipoScreen = lazy(() => import("./app/screens/TipoScreen"));
const TarifasScreen = lazy(() => import("./app/screens/TarifasScreen"));
const PagoScreen = lazy(() => import("./app/screens/PagoScreen"));
const BuscandoScreen = lazy(() => import("./app/screens/BuscandoScreen"));
const ViajeScreen = lazy(() => import("./app/screens/ViajeScreen"));

function ScreenFallback() {
  return (
    <div className="grid min-h-dvh place-items-center bg-brand text-sm font-medium text-white">
      Cargando…
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<ScreenFallback />}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<AppShell />}>
        <Route path="login" element={<LoginScreen />} />
        <Route path="registro" element={<RegisterScreen />} />
        <Route path="recuperar" element={<ForgotScreen />} />
        <Route path="recuperar/codigo" element={<CodeScreen />} />
        <Route path="recuperar/nueva" element={<NewPasswordScreen />} />
        <Route element={<RequireAuth />}>
          <Route index element={<HomeScreen />} />
          <Route path="destino" element={<DestinoScreen />} />
          <Route path="tipo" element={<TipoScreen />} />
          <Route path="tarifas/:categoria" element={<TarifasScreen />} />
          <Route path="pago" element={<PagoScreen />} />
          <Route path="buscando" element={<BuscandoScreen />} />
          <Route path="viaje" element={<ViajeScreen />} />
          <Route path="cambiar-contrasena" element={<ChangePasswordScreen />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </Suspense>
  );
}
