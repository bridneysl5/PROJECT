import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <main>
      <Navbar />

      <header className="hero">
        <div className="textos-hero">
          <h1 className="bienvenida">Bienvenida a InnerHealth</h1>
          <p>Porque nos interesa tu salud</p>
          <Link to="/signup">Registrate</Link>
        </div>
        <div className="svg-hero">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="svg1"
          >
            <path
              className="svg1-2"
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            ></path>
          </svg>
        </div>
      </header>

      <section className="wave-contenedor website">
        <img src="/Health_Isometric.svg" alt="" />
        <div className="contenedor-textos-main">
          <h2 className="titulo left">¿Sabías qué?</h2>
          <p className="parrafo">
            El 60% de las muertes son consecuencia de una baja calidad de
            atención médica y el 50% de éstás son muertes maternas.
          </p>
        </div>
      </section>

      <section className="info">
        <div className="contenedor">
          <h2 className="titulo left">Juntos podemos apoyarte</h2>
          <p>Desde donde elijas estamos para ti.</p>
        </div>
      </section>

      <section className="cards contenedor" id="especialidades">
        <div className="container-all">
          <h1 className="Titulo-principal">
            Especialidades que traemos para ti...
          </h1>
          <div className="container-box">
            <a href="#">
              <div className="box box1">
                <i className="fas fa-stethoscope icon"></i>
                <h4 className="title">Ginecología</h4>
                <p>Atención con gineco-obstetras altamente especializadas.</p>
                <div className="background-hover"></div>
              </div>
            </a>

            <a href="#">
              <div className="box box2">
                <i className="fas fa-baby icon"></i>
                <h4 className="title">Pediatría</h4>
                <p>La mejor y más profesional atención para con sus niños.</p>
                <div className="background-hover"></div>
              </div>
            </a>
            <a href="#">
              <div className="box box3">
                <i className="fas fa-brain icon"></i>
                <h4 className="title">Psicología</h4>
                <p>
                  Trato personalizado de parte de nuestros mejores
                  especialistas.
                </p>
                <div className="background-hover"></div>
              </div>
            </a>

            <a href="#">
              <div className="box box4">
                <i className="fas fa-heartbeat icon"></i>
                <h4 className="title">Cardiología</h4>
                <p>
                  Dándole amor y cariño a su corazón que tanto se lo merece.
                </p>
                <div className="background-hover"></div>
              </div>
            </a>

            <a href="#">
              <div className="box box5">
                <i className="fas fa-virus icon"></i>
                <h4 className="title">Codiv-19</h4>
                <p>
                  Los más actuales tips y consejos para con esta pandemia
                  actual.
                </p>
                <div className="background-hover"></div>
              </div>
            </a>

            <a href="#">
              <div className="box box6">
                <i className="fas fa-baby-carriage icon"></i>
                <h4 className="title">Obstetrícia</h4>
                <p>
                  Le ayudamos a traer a esa nueva vida al mundo sana y salva.
                </p>
                <div className="background-hover"></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="galeria">
        <div className="container">
          <h2 className="titulo">Beneficios por registrarte</h2>
        </div>
        <div className="temas-galeria">
          <div className="razones">
            <img src="/calendario.svg" alt="Calendar" />

            <h3 className="tit-h3">Consultas siempre</h3>

            <p className="desc-p">
              Teleconsultas activas cuando necesites y desde donde estés.
            </p>
          </div>

          <div className="razones">
            <img src="/doctor.svg" />

            <h3 className="tit-h3">Doctoras con experiencia</h3>

            <p className="desc-p">
              Atención integral con nuestros mejores especialistas.
            </p>
          </div>
          <div className="razones">
            <img src="/atencion-Integral.svg" alt="Atencion" />

            <h3 className="tit-h3">
              Acceso a una atencion integral y de calidad
            </h3>

            <p className="desc-p">
              Consultas médicas e informacion a tu servicio gratuitamente.
            </p>
          </div>
          <div className="razones">
            <img src="/hospitales.svg" alt="Ubication" />

            <h3 className="tit-h3">
              Ubica los centros de salud más cercanos a tu domicilio
            </h3>

            <p className="desc-p">
              Podrás ver un mapa en donde te orientaremos sobre los sitios
              públicos de salud se encuentra cerca de ti.
            </p>
          </div>
        </div>
      </section>

      <section className="info-last">
        <div className="contenedor last-section">
          <div className="contenedor-textos-main">
            <h2 className="titulo left">¡Y recuerda!...</h2>
            <p className="parrafo">
              Lavarte las manos con abundante agua y jabón frecuentemente para
              prevenir enfermedades mortales incluído el virus del COVID-19.
            </p>
            <a
              href="https://www.gob.pe/8663-como-prevenir-el-coronavirus"
              target="_blank"
              className="cta"
            >
              Ver más
            </a>
          </div>
          <img src="/WashingHands_Monochromatic.svg" alt="" />
        </div>

        <div className="svg-wave ">
          <svg
            className="svg2"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path
              className="svg2-2"
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            ></path>
          </svg>
        </div>
      </section>

      <footer id="contacto">
        <div className="content-foot">
          <div className="row">
            <div className="col-md-3">
              <h1>InnerHealth</h1>
            </div>
            <div className="col-md-3">
              <h6>MENU</h6>

              <li className="menu-footer">
                <a className="aFooter" href="#">
                  Home
                </a>
              </li>
              <li className="menu-footer">
                <a className="aFooter" href="#especialidades">
                  Especialidades
                </a>
              </li>
              <li className="menu-footer">
                <Link to="/login" className="aFooter">Login</Link>
              </li>
            </div>
            <div className="col-md-3">
              <h6>SERVICE</h6>

              <li className="menu-footer">
                <Link className="aFooter" to="/login">
                  Ginecología
                </Link>
              </li>
              <li className="menu-footer">
                <Link className="aFooter" to="/login">
                  Pediatría
                </Link>
              </li>
              <li className="menu-footer">
                <Link className="aFooter" to="/login">
                  Psicología
                </Link>
              </li>
              <li className="menu-footer">
                <Link className="aFooter" to="/login">
                  Cardiología
                </Link>
              </li>
              <li className="menu-footer">
                <Link className="aFooter" to="/login">
                  COVID-19
                </Link>
              </li>
              <li className="menu-footer">
                <Link className="aFooter" to="/login">
                  Obstetrícia
                </Link>
              </li>
            </div>
            <div className="col-md-3 text-center">
              <h6>SOCIAL</h6>
              <br />
              <div className="cont-social">
                <div className="social">
                  <a target="_blank" href="https://www.facebook.com/">
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
                <div className="social">
                  <a target="_blank" href="https://twitter.com/">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
                <div className="social">
                  <a target="_blank" href="https://www.instagram.com">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <p>Copyright &copy; 2022 InnerHealth </p>
            </div>
            <div className="col-md-2">
              <p
                className="cursor"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
              >
                Terminos y condiciones
              </p>
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
                      <h5 class="modal-title" id="exampleModalLabel">
                        InnerHealth.Corporation®
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h5>
                        Pronto Estaremos Habilitados para que Puedas Conocer mas
                        sobre esta gran familia de mujeres.
                      </h5>
                      <div className="contenido-not-found">
                        <img
                          src="/ComingSoon.svg"
                          alt=""
                          width={250}
                          height={250}
                        />
                        <h2 className="coming">Coming Soon!!</h2>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Gracias!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <p
                className="cursor"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
              >
                Contactanos
              </p>
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
                      <h5 class="modal-title" id="exampleModalLabel">
                        InnerHealth.Corporation®
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h5>
                        Pronto Estaremos Habilitados para que Puedas comunicarte
                        con nuestro equipo.
                      </h5>
                      <div className="contenido-not-found">
                        <img
                          src="/ComingSoon.svg"
                          alt=""
                          width={350}
                          height={350}
                        />
                        <h2 className="coming">Coming Soon!!</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
