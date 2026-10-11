import { Navigate, Outlet } from "react-router-dom";
import { useDemo } from "../context/DemoContext";

export default function RequireAuth() {
  const { session } = useDemo();
  if (!session.loggedIn) return <Navigate to="/app/login" replace />;
  return <Outlet />;
}
