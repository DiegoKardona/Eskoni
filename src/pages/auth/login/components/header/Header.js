import React from "react";

import "./Header.scss";

//Importing router
import { Link } from "react-router-dom";

//Importing icons form react-icons
import { IconContext } from "react-icons";
import { MdArrowBack } from "react-icons/md";

const Header = () => {
  return (
    <div id="login-header">
      <div id="arrow-back">
        <Link to="/" className="link">
          <IconContext.Provider value={{ size: "2em" }}>
            <MdArrowBack />
          </IconContext.Provider>
        </Link>
      </div>
      <div id="brand">
        <Link to="/" className="link">
          <h1>E'Skoni</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
