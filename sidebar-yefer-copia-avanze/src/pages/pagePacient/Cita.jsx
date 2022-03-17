import React from "react";

const Cita = () => {
  return (
    <div className="Margen2">
      <h2 className="bienvenida-citas">Genera Tu cita!</h2>

      <div className="block-citas">
        <div className="block-left">
          <div className="block-left-content">
            <section className="block-left-1">
              <div className="boton-cita ">
                <button type="button" class="btn btn-primary cita">
                  Crear
                </button>
              </div>
            </section>
            <section className="block-left-2 negativo">
              <ul className="lista-citas">
                <li>
                  <i className="bi bi-signpost-split-fill icono-citas-func"></i>
                  Estados de solicitudes
                </li>
                <li>
                  <i className="bi bi-clipboard2-pulse-fill icono-citas-func"></i>
                  Crear Nueva cita
                </li>
                <li>
                  <i class="bi bi-question-circle-fill icono-citas-func"></i>
                  Ayuda sobre Cita
                </li>
                <li>
                  <i className="bi bi-trash-fill icono-citas-func"></i>
                  Borrar Cita
                </li>
              </ul>
            </section>
            <section className="block-left-3 negativo">
              <ul className="lista-citas">
                <li className="herramientas">
                  <h5>Herramientas</h5>
                </li>
                <li>
                  Calendar{" "}
                  <i className="bi bi-calendar-check-fill icono-herramientas"></i>
                </li>
                <li>
                  Numeros de Emergencia{" "}
                  <i className="bi bi-telephone-forward-fill icono-herramientas"></i>
                </li>
                <li>
                  Enviar Comentarios{" "}
                  <i className="bi bi-chat-dots icono-herramientas"></i>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="block-right">
          <article className="tabloide">
            <h3 className="historial">Historial de Solicitudes.</h3>
            <table className="table table-hover table-lg tabla tab">
              <tbody className="tab">
                <tr>
                  <td className="col-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-md">
                        <img src="/img-refer/Paciente.png" />
                        <i class="bi bi-bookmark-check acept"></i>
                      </div>
                      <p className="font-bold ms-3 mb-0">Perla Zapata</p>
                    </div>
                  </td>
                  <td className="col-auto">
                    <p className="mb-0">
                      Super exelente... Pude encontrar mi posta mas cercana muy
                      grata atencion, Muchas Gracias @InnerHealth
                    </p>
                  </td>
                  <td>4:14pm</td>
                </tr>
                <tr>
                  <td className="col-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-md">
                        <img src="/img-refer/Paciente.png" />
                        <i class="bi bi-bookmark-x denege"></i>
                      </div>
                      <p className="font-bold ms-3 mb-0">Maria Vargas</p>
                    </div>
                  </td>
                  <td className="col-auto">
                    <p className="mb-0">
                      Me encanto mucho el servicio que te dan...son muy atentos
                      y se preocupan por uno,Pude resolvir todas mis dudas y ya
                      me recupere gracias a la doctora Josefa Valencia
                    </p>
                  </td>
                  <td>4:14pm</td>
                </tr>
                <tr>
                  <td className="col-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-md">
                        <img src="/img-refer/Paciente.png" />
                        <i class="bi bi-bookmark-check acept"></i>
                      </div>
                      <p className="font-bold ms-3 mb-0">Juana Vera</p>
                    </div>
                  </td>
                  <td className="col-auto">
                    <p className="mb-0">
                      Super @InnerHealth Me ha ayudado mucho creo que le hacen
                      falta algunas modifaciones pero de resto exelente
                      plataforma😊
                    </p>
                  </td>
                  <td>4:14pm</td>
                </tr>
                <tr>
                  <td className="col-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-md">
                        <img src="/img-refer/Paciente.png" />
                        <i class="bi bi-bookmark-x denege"></i>
                      </div>
                      <p className="font-bold ms-3 mb-0">Marible Bencomo</p>
                    </div>
                  </td>
                  <td className="col-auto">
                    <p className="mb-0">
                      La mejor Plataforma de salud que he visto😍, tienen unas
                      doctoras super atentas... Me encanta @innerhealth
                    </p>
                  </td>
                  <td>4:14pm</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Cita;
