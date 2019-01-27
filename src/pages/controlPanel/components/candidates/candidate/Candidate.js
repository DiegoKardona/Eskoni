import React from "react";

import "./Candidate.scss";

//Importing candidate defualt image
import candidatePortrait from "../../../../../images/candidatePortrait.jpg";

const Candidate = props => {
  return (
    <div className="candidate card">
      <div
        className="candidate-photo"
        style={{
          backgroundImage: props.photo
            ? `url("${props.photo}")`
            : `url(${candidatePortrait})`
        }}
      />
      <h4>{props.name}</h4>
      <button className="button primary" onClick={props.handleVote}>
        Elejir
      </button>
    </div>
  );
};

export default Candidate;
