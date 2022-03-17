import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "../css/FormPacient.css";
import APIAuth from "./APIAuth";
import { Link } from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  const [names, setNames] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();

  const crear = () => {
    const recorte = names.split(" ")
    const contenido = {
      "user": {
          "password":password,
          "email":email ,
          "is_staff": true,
          "is_superuser": true
      },
      "first_name": recorte[0],
      "last_name":  recorte[1],
      "phone": "987456123"
  }
  
      APIAuth.post("inner-health/patients/", contenido)
      .then((res) => {
        console.log(res);
      });
  };
  console.log(names)
  console.log(password)
  console.log(confirmPassword)
  console.log(email)

  return (
    <div className="form-content-right">
      <form className="form">
        <h1>REGISTRO DEL PACIENTE</h1>
        <div className="form-inputs">
          <label className="form-label">Nombre y apellidos</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Ingrese sus Nombres y apellidos"
            value={names}
            onChange={(event)=>{setNames(event.currentTarget.value)}}

          />
          
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(event)=>{setEmail(event.currentTarget.value)}}
          />
         
        </div>
        <div className="form-inputs">
          <label className="form-label">Contraseña</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(event)=>{setPassword(event.currentTarget.value)}}
          />
          
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirmar contraseña</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirmar su contraseña"
            value={confirmPassword}
            onChange={(event)=>{setConfirmPassword(event.currentTarget.value)}}

          />
          
        </div>
        <button className="form-input-btn" type="submit" onClick={crear()}>
          Sign up
        </button>
        <span className="form-input-login">
          Ya tiene una cuenta? Ingresa
          <Link to="/login" className="ingrese">
            aqui
          </Link>
        </span>
        <span className="form-input-login">
          Eres Doctora? Ingresa
          <Link to="/signupDr" className="ingrese">
            aqui
          </Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
