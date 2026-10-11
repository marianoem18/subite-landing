import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { useToast } from "../../../components/ui/Toast";

export default function ChangePasswordScreen() {
  const navigate = useNavigate();
  const toast = useToast();
  const [current, setCurrent] = useState("subite2026");
  const [password, setPassword] = useState("Subite2026!");
  const [repeat, setRepeat] = useState("Subite2026!");
  const [error, setError] = useState("");
  const ready = current && password && repeat;

  const submit = (event) => {
    event.preventDefault();
    if (password !== repeat) {
      setError("Las contraseñas no coinciden");
      return;
    }
    toast("Contraseña actualizada");
    navigate("/app");
  };

  return (
    <AuthLayout>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <Input
          tone={current ? "soft" : "muted"}
          label="Contraseña actual"
          placeholder="Contraseña actual"
          type="password"
          value={current}
          onChange={(event) => setCurrent(event.target.value)}
        />
        <Input
          tone={password ? "soft" : "muted"}
          label="Nueva contraseña"
          placeholder="Nueva contraseña"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input
          tone={repeat ? "soft" : "muted"}
          label="Repetir nueva contraseña"
          placeholder="Repetir nueva contraseña"
          type="password"
          value={repeat}
          onChange={(event) => setRepeat(event.target.value)}
        />
        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        <Button
          type="submit"
          disabled={!ready}
          variant="brand"
          className="mx-auto mt-6 min-w-36"
        >
          Confirmar
        </Button>
      </form>
    </AuthLayout>
  );
}
