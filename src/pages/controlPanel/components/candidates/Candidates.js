import React from "react";

import "./Candidates.scss";

//HandleCandidate controls every Candidate component
import Candidate from "../../containers/candidates/candidate/HandleCandidate";

const Candidates = props => {
  return (
    <div id="candidates">
      <div id="candidates-container">
        {Object.values(props.candidates).map(candidate => (
          <Candidate candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default Candidates;
