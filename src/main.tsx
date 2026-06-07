import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./App";
import { PasswordGate } from "./components/PasswordGate";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PasswordGate>
      <HashRouter>
        <App />
      </HashRouter>
    </PasswordGate>
  </StrictMode>
);
