import React from "react";

import "./LoginHero.scss";

//Importing router
import { Link } from "react-router-dom";

const LoginHero = () => {
  return (
    <div id="login-hero">
      <div id="hero-container">
        <div className="card">
          <h2>Representantes</h2>
          <Link to="/auth/login">
            <button className="button primary">Inicia sesión</button>
          </Link>
          <h3>Para poder ver y elejir un representante.</h3>
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
