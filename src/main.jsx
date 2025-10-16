import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./pages/Login/Login";
import "./global.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import NavBar from "./components/navbar/NavBar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header>
      <NavBar />
    </header>
    <main></main>

    <footer></footer>
    {/* <Login /> */}
    {/*<Cadastro />*/}
  </StrictMode>
);
