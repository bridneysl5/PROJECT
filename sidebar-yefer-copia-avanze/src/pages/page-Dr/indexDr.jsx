import React from "react";
import imagenes from "./img/imagenes";
import "./css/IndexDoc.css";

const IndexDoc = () => {
  const usuario = localStorage.getItem("Name");

  return (
    <div className="container-index">
      <div className="content-index">
        <h1>Bienvenida {usuario}</h1>
        <div className="cards-index">
          <div className="card-index">
            <div className="box-index">
              <h3>2194</h3>
              <h6>Total de Pacientes</h6>
            </div>
            <div className="icon-case">
              <img
                className="imagen_option"
                src={imagenes.totalPaciente}
                alt=""
              />
            </div>
          </div>
          <div className="card-index">
            <div className="box-index">
              <h3>2194</h3>
              <h6>Pacientes en espera</h6>
            </div>
            <div className="icon-case">
              <img
                className="imagen_option"
                src={imagenes.pacienteEspera}
                alt=""
              />
            </div>
          </div>
          <div className="card-index">
            <div className="box-index">
              <h3>2194</h3>
              <h6>Consultas realizadas</h6>
            </div>
            <div className="icon-case">
              <img
                className="imagen_option"
                src={imagenes.consultasRealizadas}
                alt=""
              />
            </div>
          </div>
          <div className="card-index perfil">
            <div className="icon-case">
              <img className="imagen_option" src={imagenes.doctora} alt="" />
            </div>
            <div className="box-index">
              <h6>Doc.Oriana Garcia</h6>
              <h5>Ginecología</h5>
            </div>
          </div>
        </div>
        <div className="content-2-index">
          <div className="solicitudes_nuevas">
            <div className="title-index">
              <h4>Solicitudes Nuevas</h4>
            </div>
            <table>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Caso</th>
                <th>Informacion</th>
                <th>Respuesta</th>
              </tr>
              <tr>
                <td>Nayeli Arely</td>
                <td>Alcantara Acosta</td>
                <td>Cáncer de mama</td>
                <td>
                  <button
                    className="cursor btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    Contactanos
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body"></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                    id="check"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16 "
                    id="false"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                    />
                  </svg>
                </td>
              </tr>
            </table>
          </div>
          <div className="Citas_Pendientes">
            <div className="title-index">
              <h4>Citas pendientes</h4>
              <button
                className="cursor btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
              >
                Ver Todas
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body"></div>
                  </div>
                </div>
              </div>
            </div>
            <table>
              <tr>
                <td>
                  <img src={imagenes.paciente} alt="" />
                </td>
                <td>Daira Romero Vertez</td>
                <td>
                  <button
                    className="cursor btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap"
                  >
                    Asistir
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexDoc;
