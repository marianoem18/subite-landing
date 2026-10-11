import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { demoUser } from "../../../data/mock";
import { useDemo } from "../../../context/DemoContext";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { login } = useDemo();
  const [usuario, setUsuario] = useState(demoUser.usuario);
  const [password, setPassword] = useState(demoUser.password);

  const enter = (event) => {
    event.preventDefault();
    login({ usuario });
    navigate("/app");
  };

  return (
    <AuthLayout>
      <form onSubmit={enter} className="flex flex-col gap-4">
        <Input
          label="Nombre de usuario"
          placeholder="Nombre de usuario"
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
          autoComplete="username"
        />
        <Input
          label="Contraseña"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
        <div className="mt-4 flex flex-col items-center gap-3 text-sm text-ink">
          <Link to="/app/recuperar" className="min-h-11 px-3 py-2">
            ¿Olvidaste tu contraseña?
          </Link>
          <Link to="/app/registro" className="min-h-11 px-3 py-2">
            Crear cuenta
          </Link>
        </div>
        <Button type="submit" className="mx-auto mt-4 min-w-36">
          Entrar
        </Button>
      </form>
    </AuthLayout>
  );
}
