import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../../components/ui/Button";

export default function CodeScreen() {
  const navigate = useNavigate();
  const refs = useRef([]);
  const slots = ["primero", "segundo", "tercero", "cuarto"];
  const [code, setCode] = useState(["", "", "", ""]);

  const update = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);
    if (digit && index < 3) refs.current[index + 1]?.focus();
  };

  const onKeyDown = (index, event) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const submit = (event) => {
    event.preventDefault();
    navigate("/app/recuperar/nueva");
  };

  return (
    <AuthLayout>
      <form onSubmit={submit}>
        <h1 className="font-display text-4xl font-bold leading-tight text-brand">
          Ingresá el código de verificación
        </h1>
        <div className="mt-6 flex justify-between gap-3">
          {code.map((digit, index) => (
            <input
              key={slots[index]}
              ref={(node) => {
                refs.current[index] = node;
              }}
              inputMode="numeric"
              aria-label={`Dígito ${index + 1}`}
              value={digit}
              onChange={(event) => update(index, event.target.value)}
              onKeyDown={(event) => onKeyDown(index, event)}
              className="h-16 min-w-0 flex-1 rounded-xl bg-input-strong text-center text-2xl font-semibold text-white outline-none"
            />
          ))}
        </div>
        <Button type="submit" className="mx-auto mt-8 min-w-36">
          Confirmar
        </Button>
      </form>
    </AuthLayout>
  );
}
