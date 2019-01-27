import React from "react";

import "./VotationState.scss";

//HandleMainHero controls the Mainhero component
import MainHero from "../../containers/mainHero/HandleMainHero";

const VotationState = props => {
  return props.votationState ? (
    <MainHero />
  ) : (
    <div id="closed-votation">
      <div className="card">
        <h2>La votación se encuentra cerrada</h2>
      </div>
    </div>
  );
};

export default VotationState;
