import React from "react";

import "./Header.scss";

//Importing router
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div id="header">
      <div id="header-container">
        <div id="brand">
          <Link to="/" className="link">
            <h1>E'Skoni</h1>
          </Link>
        </div>
        <div>{props.handleRenderMenu}</div>
      </div>
    </div>
  );
};

export default Header;
