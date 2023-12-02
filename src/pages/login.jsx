import React, { useState } from "react";
import { Login } from "../components/Dashboard/login/login";
import { Register } from "../components/Dashboard/login/Register";

function Signin() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Signin;