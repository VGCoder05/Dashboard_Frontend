import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./context/ContextProvider.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </HashRouter>
);
