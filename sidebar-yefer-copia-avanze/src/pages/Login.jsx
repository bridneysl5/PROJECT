import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIAuth from "../utils/APIAuth";
import { dinamicTitle } from "../utils/Title";

const Login = () => {
  dinamicTitle("InnerHealth | Login");

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState();

  const validar = () => {
    const contenido = {
      email: user,
      password: password,
    };
    APIAuth.post("authentication/login/", contenido)
      .then((res) => {
        const usuario = res.data.email.split("@")
        sessionStorage.setItem("User",usuario[0]);
        if (res.data.is_doctor == true) {
          sessionStorage.setItem("token_Dr", res.data.token);
          sessionStorage.setItem("email_user", res.data.email);
          navigate("/innerhealthDr");
          window.location.reload(true)
        } else {
          sessionStorage.setItem("email_user", res.data.email);
          sessionStorage.setItem("token", res.data.token);
          navigate("/innerhealth");
          window.location.reload(true)

        }
      });
  };

  return (
    <main className="form-signin">
      <video autoPlay loop>
        <source src="/Video.mp4" />
      </video>
      <div className="capa-ajuste"></div>
      <div className="contenedor-form">
        <form id="form">
          <Link to="/">
            <img
              className="mb-4 img in"
              src="/logo-actualizado.png"
              alt=""
              width="100"
              height="100"
            />
          </Link>
          <h1 className="h3 mb-3 fw-normal">Iniciar Sesion</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={user}
              onChange={(event) => setUser(event.currentTarget.value)}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recordarme
            </label>
          </div>
          <div className="butt">
            <button type="button" className="btn btn-primary" onClick={validar}>
              Iniciar Sesion.
            </button>
          </div>
          <div className="botones">
            <br />

            <Link to="/signup" className="negro">
              No estas registrado? <span className="register-alert">Registrate Aqui!!</span> 
            </Link>
            {/* <div
              className="fb-login-button"
              data-width=""
              data-size="large"
              data-button-type="continue_with"
              data-layout="default"
              data-auto-logout-link="false"
              data-use-continue-as="false"
            ></div> */}
            <div className="copyrigth">
              <p>&copy; InnerHealth 2022</p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
