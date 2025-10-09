import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./pages/Login/Login";
import "./global.css";
import Cadastro from "./pages/Cadastro/Cadastro";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Login /> */}
    <Cadastro />
  </StrictMode>
);
