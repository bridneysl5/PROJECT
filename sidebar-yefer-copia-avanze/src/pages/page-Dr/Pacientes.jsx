import React from "react";
import "./css/pacientes-doc.css";

const Pacientes = () => {
  return (
    <div>
      <div className="container-index">
        <div className="content-index">
          <div className="content-2-index">
            <div className="solicitudes_nuevas">
              <div className="title-index">
                <h2>Datos del Paciente</h2>
              </div>
              <table>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Enfermedad</th>
                  <th>Fecha de entrada</th>
                  <th>Estado</th>
                  <th>Info</th>
                </tr>
                <tr>
                  <td>Nayeli Arely</td>
                  <td>Alcantara Acosta</td>
                  <td>Cáncer de mama</td>
                  <td>24/11/2019 at 10:00pm</td>
                  <td>Recuperado</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg"
                    >
                      Large modal
                    </button>

                    <div
                      class="modal fade bd-example-modal-lg"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="myLargeModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">...</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pacientes;
