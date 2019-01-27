import React from "react";

import "./MainHero.scss";

import Candidates from "../../../controlPanel/containers/candidates/HandleCandidates";

const MainHero = props => {
  return (
    <div id="main-hero">
      <div id="hero-container">
        <div className="card">
          <h2>Representantes</h2>
          <Candidates />
        </div>
      </div>
    </div>
  );
};

export default MainHero;
