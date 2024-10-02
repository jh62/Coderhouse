import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { cartContext } from "./context/cartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <cartContext.Provider>
      <App />
    </cartContext.Provider>
  </StrictMode>
);
