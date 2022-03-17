import React from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Events from "./Events";
import IndexDoc from "../pages/page-Dr/indexDr";
import MiPerfilDr from "../pages/page-Dr/MiPerfilDr";
import Calendario from "../pages/page-Dr/Calendario";
import Pacientes from "../pages/page-Dr/Pacientes";
import { dinamicTitle } from "../utils/Title";

import Notfound from "./Notfound";

const SidebarDr = () => {
  dinamicTitle("InnerHealth | MainDr");

  const navigate = useNavigate();

  const condicional = ({ isActive }) =>
    isActive ? "sidebar-linked-Dr " : "defaultDr";

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <div id="sidebar" className="active sidebar">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <h1>InnerHealth</h1>
              </div>
              <div className="toggler">
                <a href="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-title">Menu-Doctor</li>

              <li className="sidebar-item active">
                <NavLink to="/InnerHealthDr" className="defaultDr">
                  <i className="bi bi-house-heart icono"></i>
                  <span className="letras-title">InnerHome</span>
                </NavLink>
              </li>
              <li className="sidebar-item active">
                <NavLink to="/InnerHealthDr/Pacientes" className={condicional}>
                  <i className="bi bi-person-circle icono"></i>
                  <span className="letras-title">Pacientes</span>
                  <span className="letras">Datos de pacientes</span>
                </NavLink>
              </li>

              <li className="sidebar-item active">
                <NavLink to="/InnerHealthDr/Calendar" className={condicional}>
                  <i className="bi bi-calendar2-heart-fill icono"></i>
                  <span className="letras-title">Calendario</span>
                  <span className="letras">Chequea tus citas.</span>
                </NavLink>
              </li>

              <li className="sidebar-item active">
                <NavLink
                  to="/InnerHealthDr/InnerHealthEvents"
                  className={condicional}
                >
                  <i class="bi bi-chat-heart-fill icono"></i>
                  <span className="letras-title">Eventos</span>
                  <span className="letras">Empoderate!!</span>
                </NavLink>
              </li>
              <li className="sidebar-item active">
                <NavLink to="/InnerHealthDr/MiPerfil" className={condicional}>
                  <i className="bi bi-person-circle icono"></i>
                  <span className="letras-title">Mi Perfil</span>
                  <span className="letras">Editar Perfil.</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            type="button"
            class="btn btn-outline-danger logout"
            onClick={cerrarSesion}
          >
            <i class="bi bi-door-open"></i>
            Cerrar Sesion
          </button>
          <button className="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>
      <Routes>
        <Route index element={<IndexDoc />} />
        <Route path="/Pacientes" element={<Pacientes />} />
        <Route path="/Calendar" element={<Calendario />} />
        <Route path="/MiPerfil" element={<MiPerfilDr />} />
        <Route path="/InnerHealthEvents" element={<Events />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default SidebarDr;
