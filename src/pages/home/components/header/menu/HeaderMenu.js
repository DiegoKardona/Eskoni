import React from "react";

import "./HeaderMenu.scss";

//Importing router
import { Link } from "react-router-dom";

//Importing candidate defualt image
import candidatePortrait from "../../../../../images/candidatePortrait.jpg";

const LoggedMenu = props => {
  if (window.innerHeight > window.innerWidth) {
    alert("Recomendamos girar el movil");
  }

  return (
    <div id="logged-menu">
      <div id="user-info">
        <div id="user-name">
          <p>
            {props.user.displayName ? props.user.displayName : props.user.email}
          </p>
        </div>
        <div id="user-avatar">
          <Link to="/account" className="link">
            <div
              id="avatar"
              style={{
                backgroundImage: props.user.photoURL
                  ? `url("${props.user.photoURL}")`
                  : `url(${candidatePortrait})`
              }}
            />
          </Link>
        </div>
      </div>
      <div id="menu">
        <Link to="/" className="link">
          Principal
        </Link>
      </div>
      <Link to="" className="link" onClick={props.handleLogout}>
        Salir
      </Link>
    </div>
  );
};

const AdminMenu = props => {
  if (window.innerHeight > window.innerWidth) {
    alert("Recomendamos girar el movil");
  }
  return (
    <div id="admin-menu">
      <div id="user-info">
        <div id="user-name">
          <p>
            {props.user.displayName ? props.user.displayName : props.user.email}
          </p>
        </div>
        <div id="user-avatar">
          <Link to="/account" className="link">
            <div
              id="avatar"
              style={{
                backgroundImage: props.user.photoURL
                  ? `url("${props.user.photoURL}")`
                  : `url("https://png.pngtree.com/element_origin_min_pic/16/08/26/1957c027f589662.jpg")`
              }}
            />
          </Link>
        </div>
      </div>
      <div id="menu">
        <Link to="/" className="link">
          Principal
        </Link>
        <Link to="/control" className="link">
          Control
        </Link>
      </div>
      <Link to="" className="link" onClick={props.handleLogout}>
        Salir
      </Link>
    </div>
  );
};

const LoginMenu = () => {
  return (
    <div id="login-menu">
      <Link to="/" className="link">
        Principal
      </Link>
      <Link to="/auth/login" className="link">
        Iniciar sesión
      </Link>
    </div>
  );
};

export { LoggedMenu, AdminMenu, LoginMenu };
