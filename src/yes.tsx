import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { Yes } from "./pages/Yes";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Yes />
  </React.StrictMode>
);
