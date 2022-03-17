import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "../css/FormDoctores.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [cmp, setCmp] = useState();

  const crear = () => {
    const contenido = {
      user: {
        username: "paoleta",
        password: "silabuz",
        email: "paoleta@gmail.com",
        is_staff: false,
        is_superuser: false,
        first_name: null,
        last_name: null,
      },
      especiality_id: 3,
      phone: "987456123",
    };

    axios
      .post("http://localhost:8000/inner-health/doctors/", contenido)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form-Dr" noValidate>
        <h1 className="tittle">REGISTRO DEL DOCTOR</h1>
        <div className="form-inputs">
          <label className="form-label">Nombre y apellidos</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Ingrese sus Nombres y apellidos"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">
            Codigo de Colegio Médico del Perú
          </label>
          <input
            className="form-input"
            type="text"
            name="codigo_cmp"
            placeholder="Ingrese su CMP"
            value={values.cmp}
            onChange={handleChange}
          />
          {errors.cmp && <p>{errors.cmp}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Ingrese su email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Contraseña</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirmar contraseña</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirmar su contraseña"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn-Dr" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Ya tiene una cuenta? Ingresa{" "}
          <Link to="/login" className="ingrese">
            aqui
          </Link>
        </span>
        <span className="form-input-login">
          Eres paciente? Ingresa
          <Link to="/signup" className="ingrese">
            aqui
          </Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
