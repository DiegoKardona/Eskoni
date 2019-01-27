import React from "react";

import "./RegisterForm.scss";

//Importing router
import { Link } from "react-router-dom";

//Importing icons
import { IconContext } from "react-icons";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";

//Importing spaceman logo from images folder
import spaceman from "../../../../../images/spaceman.png";

const RegisterForm = props => {
  return (
    <div id="register-container">
      <div id="register-form" className="card">
        <div id="form-header">
          <img src={spaceman} width="100" />
          <h2>Registrar cuenta</h2>
        </div>
        <form onSubmit={props.handleRegister}>
          <div id="form-body">
            <div id="email">
              <p>Correo electrónico</p>
              <input
                id="email-input"
                name="email"
                value={props.data.email}
                onChange={props.handleChange}
                type="email"
              />
            </div>
            <div id="username">
              <p>Nombre de usuario</p>
              <input
                id="username-input"
                name="username"
                value={props.data.username}
                onChange={props.handleChange}
                type="text"
              />
            </div>
            <div id="password">
              <p>Contraseña</p>
              <input
                id="password-input"
                name="password"
                value={props.data.password}
                onChange={props.handleChange}
                type="password"
              />
            </div>
            <div id="login-register">
              <button id="register-button" className="button primary">
                Registrarse
              </button>
              <p>
                o <Link to="/auth/login">Acceder</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
