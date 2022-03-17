import React from "react";
import "../page-Dr/css/PerfilDr.css";
const MiPerfil = () => {
  return (
    <div>
      <div className="container_perfil">
        <section className="seccion-perfil-usuario">
          <div className="perfil-usuario-header">
            <div className="perfil-usuario-portada">
              <div className="perfil-usuario-avatar">
                <img
                  src="http://localhost/multimedia/relleno/img-c9.png"
                  alt="img-avatar"
                />
                <button type="button" className="boton-avatar">
                  <i className="far fa-image"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
              <h3 className="titulo">Arely Jamile Alcantara</h3>
              <p className="texto">
                Dermatológo con nuevos conocimientos y experiencia ganada en
                HOSPITALES DE ALTA RESOLUCIÓN. Ofertando servicio de CALIDAD!!!
                Médico Dermatologo, Universidad Nacional Mayor de San
                Marcos/Hospital Guillermo Almenara, 2013 Santa casa de la
                misericordia Rio de Janeiro .
              </p>
            </div>
            <div className="perfil-usuario-footer">
              <div className="lista-datos separador">
                <label for=""> Nombres y apellidos: </label>

                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                />

                <label for=""> Telefono: </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                />
                <label for=""> DNI: </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                />
                <label for=""> Residencia: </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
              <div className="lista-datos mejorador">
                <label for=""> Fecha nacimiento: </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
              <button type="button" className="btn btn-outline-dark top">
                Guardar Informacion
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MiPerfil;
