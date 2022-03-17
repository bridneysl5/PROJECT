import React from "react";

const IndexPacient = () => {
  const usuario = sessionStorage.getItem("User");
  const userEmail = sessionStorage.getItem('email_user')

  return (
    <div className="Margen">
      <main>
        <header className="bienvenida-dasboard">
          <h2>Bienvenida {usuario}</h2>
          <div className="pruebas">
            <div className="cajita">
              <i class="bi bi-calendar-plus"></i>
            </div>
            <p className="indicador-citas">Citas en Curso 0</p>
          </div>
        </header>
        <article className="tabloide">
          <h3 className="experiencia">Experiencia de otras madres</h3>
          <table className="table table-hover table-lg tabla tab">
            <thead className="tab">
              <tr>
                <th>Nombre</th>
                <th>Experiencia</th>
                <th>Calificacion dada</th>
              </tr>
            </thead>
            <tbody className="tab">
              <tr>
                <td className="col-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-md">
                      <img src="/img-refer/Paciente.png" />
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

                <td>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                </td>
              </tr>
              <tr>
                <td className="col-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-md">
                      <img src="/img-refer/Paciente.png" />
                    </div>
                    <p className="font-bold ms-3 mb-0">Maria Vargas</p>
                  </div>
                </td>
                <td className="col-auto">
                  <p className="mb-0">
                    Me encanto mucho el servicio que te dan...son muy atentos y
                    se preocupan por uno,Pude resolvir todas mis dudas y ya me
                    recupere gracias a la doctora Josefa Valencia
                  </p>
                </td>
                <td>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-half estrella"></i>
                </td>
              </tr>
              <tr>
                <td className="col-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-md">
                      <img src="/img-refer/Paciente.png" />
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
                <td>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-half estrella"></i>
                  <i className="bi bi-star estrella"></i>
                </td>
              </tr>
              <tr>
                <td className="col-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-md">
                      <img src="/img-refer/Paciente.png" />
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
                <td>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                  <i className="bi bi-star-fill estrella"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article className="articulo-dash">
          <img src="/ComingSoon.svg" alt="" width={300} />
          <h4>Pronto Traeremos mas contenido exclusivo para ti.</h4>
        </article>
        <footer className="footer-dashboard">
          InnerHealht Coporation 2022©
        </footer>
      </main>
      <aside className="sec-side">
        <header className="perfil-pacient">
          <img src="/img-refer/Paciente.png" alt="" width={60} height={60} />
          <div className="datos-side">
            <div className="nombre">
              <h4>{usuario}</h4>
            </div>
            <div className="correo">{userEmail}</div>
          </div>
        </header>
        <article>
          <section className="sec-side-content">
            <h5>
              Solicitudes Hechas <i class="bi bi-arrow-down-short"></i>
            </h5>
            <div className="contenido-side">
              <div className="seccion-izquierda">
                <img
                  src="/img-refer/Doctora.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div className="seccion-derecha">
                <h5>
                  A:<p className="parrafo-side">Doctora Maria Verucci</p>
                  <p className="parrafo-side">
                    llevo 7 meses de embarazo pero presento mucho dolores me
                    gustaria una cita con usted.
                  </p>
                </h5>
              </div>
            </div>
            <button type="button" class="btn btn-outline-primary">
              Crear Solicitud
            </button>
          </section>
        </article>
      </aside>
    </div>
  );
};

export default IndexPacient;
