import React from "react";

import "./LoginForm.scss";

//Importing router
import { Link } from "react-router-dom";

//Importing icons
import { IconContext } from "react-icons";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";

//Importing spaceman logo from images folder
import spaceman from "../../../../../images/spaceman.png";

const LoginForm = props => {
  return (
    <div id="login-container">
      <div id="login-form" className="card">
        <div id="form-header">
          <img src={spaceman} width="100" />
          <h2>Iniciar sesión</h2>
        </div>
        <form onSubmit={props.handleEmailAuth}>
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
              <button
                id="login-button"
                className="button primary"
                type="submit"
              >
                Acceder
              </button>
              <p>
                o <Link to="/auth/register">Registrarse</Link>
              </p>
            </div>
          </div>
        </form>
        <hr />
        <div id="social-login">
          <div id="google-login" onClick={props.handleGoogleAuth}>
            <IconContext.Provider value={{ size: "1.17em" }}>
              <IoLogoGoogle />
            </IconContext.Provider>
            <h3>Acceder con Google</h3>
          </div>
          <div id="facebook-login" onClick={props.handleFacebookAuth}>
            <IconContext.Provider value={{ size: "1.17em" }}>
              <IoLogoFacebook />
            </IconContext.Provider>
            <h3>Acceder con Facebook</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
