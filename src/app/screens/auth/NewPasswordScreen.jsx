import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { useToast } from "../../../components/ui/Toast";

export default function NewPasswordScreen() {
  const navigate = useNavigate();
  const toast = useToast();
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (password && repeat && password !== repeat) {
      setError("Las contraseñas no coinciden");
      return;
    }
    toast("Contraseña actualizada");
    navigate("/app/login");
  };

  return (
    <AuthLayout>
      <form onSubmit={submit}>
        <h1 className="font-display text-4xl font-bold leading-tight text-brand">
          Creá tu nueva contraseña
        </h1>
        <div className="mt-6 flex flex-col gap-3">
          <Input
            tone="strong"
            label="Nueva contraseña"
            placeholder="Nueva contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Input
            tone="strong"
            label="Confirmar nueva contraseña"
            placeholder="Confirmar nueva contraseña"
            type="password"
            value={repeat}
            onChange={(event) => setRepeat(event.target.value)}
          />
        </div>
        {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}
        <Button type="submit" className="mx-auto mt-8 min-w-36">
          Confirmar
        </Button>
      </form>
    </AuthLayout>
  );
}
