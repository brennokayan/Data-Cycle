import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {  } from "../pages/landing";
// import { HomePage } from "../pages/home";
import { LandingPage } from "../pages/landing";
import { ClientHomePage } from "../pages/User/cliente";
import { LoginPage } from "../pages/Login";
import PrivateRoutes from "./privatesRoutes";
import { NotFoundPage } from "../pages/NotFound";
// import { ProfilePage } from "../pages/User/profile";
import { Consultoria } from "../pages/Consultoria";
import { LogReversa } from "../pages/LogReversa";
import { Resultados } from "../pages/User/resultados";
export function DefaultRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<LandingPage />} path="/" />
        <Route element={<Consultoria />} path="/consultoria" />
        <Route element={<LogReversa />} path="logistica-reversa" />
        <Route element={<PrivateRoutes />}>
          <Route element={<Resultados />} path="/resultados" />
          <Route element={<ClientHomePage />} path="/user" />
        </Route>
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
