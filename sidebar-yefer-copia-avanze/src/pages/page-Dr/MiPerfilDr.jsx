import React from "react";
import "./css/PerfilDr.css";
const MiPerfilDr = () => {
  return (
    <div>
      <div className="container_perfil">
        <section className="seccion-perfil-usuario">
          <div className="perfil-usuario-header2">
            <div className="perfil-usuario-portada2">
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
              <div className="lista-datos mover">
                <label for=""> Nombres y apellidos: </label>

                <input
                  type="tipo"
                  className="form-control"
                  id="inputPassword"
                  value="Arely Jamile Alcantara"
                />

                <label for=""> Telefono: </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword"
                  value="930725450"
                />
                <label for=""> DNI: </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword"
                  value="71496791"
                />
                <label for=""> Especialidad: </label>
                <input
                  type="tipo"
                  className="form-control"
                  id="inputPassword"
                  value="Ginecologa"
                />
              </div>
              <div className="lista-datos">
                <label for=""> Ubicacion de la clinica: </label>
                <input
                  type="text"
                  value="Jesus Maria Av.arica 17485"
                  className="form-control"
                  id="inputPassword"
                />
                <br />
                <label for=""> Residencia: </label>
                <input
                  type="text"
                  value=" Breña Av.arica 17485"
                  className="form-control"
                  id="inputPassword"
                />
                <label for=""> Fecha nacimiento: </label>
                <input
                  type="week"
                  id="semana"
                  name="semana"
                  className="form-control"
                  id="inputPassword"
                />
                <label for=""> Mandar curriculum: </label>
                <input
                  type="file"
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

export default MiPerfilDr;
