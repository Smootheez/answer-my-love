import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Yes } from "./Yes.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
