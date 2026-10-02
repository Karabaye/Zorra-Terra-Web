import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
const appElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, appElement);
} else {
  createRoot(rootElement).render(appElement);
}
