import React, { useState } from "react";
import FormSignup from "../utils/FormSignup";
import FormSuccess from "../utils/FormSuccess";
import Navbar from "../components/Navbar";

const SignUpPacient = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Navbar />
      <div className="form-container">
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default SignUpPacient;
