import React from "react";
import "../css/aboutUs.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="objetives">
          <div className="box-objetives">
            <h1 className="nosotros">
              ¿Quienes somos? <i class="bi bi-patch-question icono-obj"></i>
            </h1>
            <p>
              Innerhealth es una plataforma desarrollada para las madres
              peruanas y extranjeras residentes en Perú, con la atención
              especializada de personal médico de su mismo género. Parte como el
              desarrollo del proyecto integrador del grupo 3 "Salud y
              Bienestar", perteneciente al Bootcamp de la O.I.T. que lleva
              Silabuz.
            </p>
          </div>
          <div className="box-objetives">
            <h1>
              Misión <i class="bi bi-flag icono-obj"></i>
            </h1>
            <p>
              La página web tiene como objetivo primordial la priorización e
              inclusión de las familias como eje principal de la sociedad,
              quienes ameritan ayuda, apoyo y asesoría médica para el buen
              desarrollo en la misma. A su vez otros objetivos son: asegurar la
              atención personalizada y eficaz de las madres en suelo peruana, la
              identificación de las enfermedades más comunes en mujeres y niños
              y su fututa solución, como también el coordinar e identificar los
              centros de salud donde se pueden apersonar quienes lo deseen o
              ameriten de esta manera.
            </p>
          </div>
          <div className="box-objetives">
            <h1>
              Visión <i class="bi bi-bullseye icono-obj"></i>
            </h1>
            <p>
              Innerhealth busca incentivar y concretar el buen funcionamiento
              del sistema de salud a través de las herramientas tecnológicas,
              además de brindar apoyo y hacer más amena la búsqueda de apoyo
              médico por parte de la población objetivo, como respuesta a una
              urgencia que se ha agigantado en la actualidad post-pandemia.
            </p>
          </div>
        </div>
        <div className="divs">
          <h1>
            <strong>Equipo: </strong>
          </h1>
          <br />
          <div className="list">
            <div>
              <h3>Bridneys Leyrin Aguilar Jorge</h3>
              <img className="photos" src="/founders/Bridneys.jpg" alt="" />
              <p>Web UI Designer </p>
            </div>
            <div>
              <h3>Mariano Gustavo Román Cortés</h3>
              <img className="photos" src="/founders/Gustavo.jpg" alt="" />
              <p>Developer Backend</p>
            </div>
            <div>
              <h3>Yefer Lesvier García Fernández</h3>
              <img className="photos" src="/founders/Yefer.jpg" alt="" />
              <p>Web UI Designer</p>
            </div>
            <div>
              <h3>Yosmar Lobo Lobo</h3>
              <img className="photos" src="/founders/Yosmar.jpg" alt="" />
              <p>Web Developer</p>
            </div>
          </div>
        </div>
      </section>
      <section className="InnerHealth">
        <img
          src="/logo-actualizado.png"
          alt=""
          srcset=""
          width={200}
          className="in"
        />
        <h1>InnerHealth® </h1>
        <p>Copyrigth 2022©</p>
      </section>
      <div className="svg-wave ">
        <svg className="svg2" viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            className="svg2-2"
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          ></path>
        </svg>
      </div>
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
    </>
  );
};

export default AboutUs;
