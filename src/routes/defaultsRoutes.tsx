import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {  } from "../pages/landing";
// import { HomePage } from "../pages/home";
import { LandingPage } from "../pages/landing";
import { ClientHomePage } from "../pages/User/cliente";
import { LoginPage } from "../pages/Login";
import PrivateRoutes from "./privatesRoutes";
import { NotFoundPage } from "../pages/NotFound";
import { ProfilePage } from "../pages/User/profile";
export function DefaultRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<LandingPage />} path="/" />
        <Route element={<PrivateRoutes />}>
          <Route element={<ProfilePage />} path="/profile" />
          <Route element={<ClientHomePage />} path="/user" />
        </Route>
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
