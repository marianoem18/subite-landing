import { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { languages } from "../../data/mock";
import { useDemo } from "../../context/DemoContext";
import Modal from "../../components/ui/Modal";
import Toggle from "../../components/ui/Toggle";

export default function ConfigDrawer({ onClose }) {
  const navigate = useNavigate();
  const { settings, updateSettings, logout } = useDemo();
  const [section, setSection] = useState("root");
  const [confirm, setConfirm] = useState(false);

  const closeAll = () => {
    setSection("root");
    onClose();
  };

  const setNotification = (key, value) =>
    updateSettings({
      notifications: { ...settings.notifications, [key]: value },
    });

  const setAccount = (key, value) =>
    updateSettings({
      accounts: { ...settings.accounts, [key]: value },
    });

  return (
    <div className="absolute inset-0 z-50 flex">
      <aside className="flex h-full w-[78%] max-w-[320px] flex-col bg-brand px-5 pb-8 pt-3 text-white">
        <button
          type="button"
          aria-label="Cerrar configuración"
          onClick={closeAll}
          className="grid size-11 place-items-center self-start rounded-full"
        >
          <Menu size={24} />
        </button>
        <h2 className="mt-2 font-display text-xl font-semibold">Configuración</h2>

        {section === "root" ? (
          <div className="mt-6 flex flex-1 flex-col">
            <DrawerLink label="Notificación" onClick={() => setSection("notificaciones")} />
            <DrawerLink label="Idioma" onClick={() => setSection("idioma")} />
            <DrawerLink label="Cuentas vinculadas" onClick={() => setSection("cuentas")} />
            <DrawerLink
              label="Cambiar contraseña"
              onClick={() => {
                closeAll();
                navigate("/app/cambiar-contrasena");
              }}
            />
            <button
              type="button"
              onClick={() => setConfirm(true)}
              className="mt-auto min-h-11 self-start text-sm"
            >
              Cerrar sesión
            </button>
          </div>
        ) : null}

        {section === "notificaciones" ? (
          <div className="mt-6">
            <SectionTitle label="Notificación" onBack={() => setSection("root")} />
            <Toggle
              label="Notificaciones push"
              value={settings.notifications.push}
              onChange={(value) => setNotification("push", value)}
            />
            <Toggle
              label="Ofertas y promociones"
              value={settings.notifications.offers}
              onChange={(value) => setNotification("offers", value)}
            />
            <Toggle
              label="Novedades de la aplicación"
              value={settings.notifications.news}
              onChange={(value) => setNotification("news", value)}
            />
          </div>
        ) : null}

        {section === "idioma" ? (
          <div className="mt-6">
            <SectionTitle label="Idioma" onBack={() => setSection("root")} />
            {languages.map((language) => (
              <button
                key={language.id}
                type="button"
                onClick={() => updateSettings({ language: language.id })}
                aria-pressed={settings.language === language.id}
                className="flex min-h-11 w-full items-center justify-between gap-3 py-2 text-left text-sm"
              >
                <span>{language.label}</span>
                <span className="font-semibold tracking-wide">
                  {settings.language === language.id ? "SÍ" : "NO"}
                </span>
              </button>
            ))}
          </div>
        ) : null}

        {section === "cuentas" ? (
          <div className="mt-6">
            <SectionTitle label="Cuentas vinculadas" onBack={() => setSection("root")} />
            {Object.keys(settings.accounts).map((name) => (
              <Toggle
                key={name}
                label={name}
                value={settings.accounts[name]}
                onChange={(value) => setAccount(name, value)}
              />
            ))}
          </div>
        ) : null}
      </aside>
      <button
        type="button"
        aria-label="Cerrar configuración"
        className="h-full flex-1"
        onClick={closeAll}
      />

      <Modal open={confirm} title="Cerrar sesión">
        <div className="grid grid-cols-2 border-t border-neutral-200">
          <button
            type="button"
            onClick={() => setConfirm(false)}
            className="min-h-12 border-r border-neutral-200 font-display font-semibold text-brand"
          >
            NO
          </button>
          <button
            type="button"
            onClick={() => {
              logout();
              navigate("/app/login");
            }}
            className="min-h-12 font-display font-semibold text-brand"
          >
            SÍ
          </button>
        </div>
      </Modal>
    </div>
  );
}

function DrawerLink({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-11 w-full py-2 text-left text-sm"
    >
      {label}
    </button>
  );
}

function SectionTitle({ label, onBack }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="mb-3 min-h-11 text-left text-sm font-semibold"
    >
      {label}
    </button>
  );
}
