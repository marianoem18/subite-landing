import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { demoUser } from "../../../data/mock";
import { useToast } from "../../../components/ui/Toast";

export default function ForgotScreen() {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState(demoUser.email);

  const submit = (event) => {
    event.preventDefault();
    toast("Te enviamos un código de demostración");
    navigate("/app/recuperar/codigo");
  };

  return (
    <AuthLayout>
      <form onSubmit={submit}>
        <h1 className="font-display text-4xl font-bold leading-tight text-brand">
          ¿Olvidaste tu contraseña?
        </h1>
        <p className="mt-4 text-sm text-ink">
          Escribí tu email para recuperar contraseña
        </p>
        <Input
          className="mt-4"
          tone="strong"
          label="Email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit" className="mx-auto mt-8 min-w-40">
          Enviar código
        </Button>
      </form>
    </AuthLayout>
  );
}
