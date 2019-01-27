import React from "react";

import "./Control.scss";

//HandleNewCandidate controls NewCandidate component that's for create a new candidate
import NewCandidate from "../../containers/newCandidate/HandleNewCandidate";

//HandleCandidates render every candidate
import Candidates from "../../containers/candidates/HandleCandidates";

const Control = props => {
  return (
    <div id="control-panel">
      <div id="panel-container">
        <div className="card">
          <h2>Panel de control</h2>
          <h3>
            Estado actual de la votación:{" "}
            <span id="votation-state" style={{ color: "#1850ec" }}>
              {props.votationState ? "Abierto" : "Cerrado"}
            </span>
          </h3>
          <button
            className="button primary"
            onClick={props.handleVotationState}
          >
            {!props.votationState ? "Abrir" : "Cerrar"}
          </button>
          <hr />
          <NewCandidate />
          <hr />
          <h3>Representantes</h3>
          <Candidates />
        </div>
      </div>
    </div>
  );
};

export default Control;
