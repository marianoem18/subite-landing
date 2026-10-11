import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { demoUser } from "../../../data/mock";
import { useDemo } from "../../../context/DemoContext";

const fields = [
  ["nombre", "Nombre", demoUser.nombre],
  ["apellido", "Apellido", demoUser.apellido],
  ["usuario", "Nombre de usuario", demoUser.usuario],
  ["email", "Email", demoUser.email],
  ["password", "Contraseña", demoUser.password],
];

export default function RegisterScreen() {
  const navigate = useNavigate();
  const { login } = useDemo();
  const [form, setForm] = useState(() =>
    Object.fromEntries(fields.map(([key, , value]) => [key, value])),
  );

  const submit = (event) => {
    event.preventDefault();
    login(form);
    navigate("/app");
  };

  return (
    <AuthLayout>
      <form onSubmit={submit} className="flex flex-col gap-3">
        {fields.map(([key, label]) => (
          <Input
            key={key}
            tone="strong"
            label={label}
            placeholder={label}
            type={key === "password" ? "password" : key === "email" ? "email" : "text"}
            value={form[key]}
            onChange={(event) =>
              setForm((current) => ({ ...current, [key]: event.target.value }))
            }
          />
        ))}
        <p className="px-1 text-sm italic text-neutral-400">
          Debe contener mayúscula, número y símbolos especiales
        </p>
        <Button type="submit" className="mx-auto mt-6 min-w-40">
          Crear cuenta
        </Button>
      </form>
    </AuthLayout>
  );
}
