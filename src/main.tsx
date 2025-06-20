import { createRoot } from "react-dom/client";
import "./index.css";
import Main from "./pages/Main.tsx";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
