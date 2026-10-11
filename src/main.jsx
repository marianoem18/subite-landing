import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./index.css";
import App from "./App";
import { ToastProvider } from "./components/ui/Toast";
import { DemoProvider } from "./context/DemoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <DemoProvider>
          <App />
        </DemoProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
);
