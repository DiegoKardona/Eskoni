import React, { Component } from "react";

import firebase from "firebase";

//Importing Candidates component that render every candidate
import Candidates from "../../components/candidates/Candidates";

class HandleCandidates extends Component {
  state = {
    candidates: {}
  };

  componentDidMount() {
    const db = firebase.firestore();

    this.setState({ isLoading: true });

    db.collection("candidates")
      .get()
      .then(querySnapshot => {
        const candidates = [];
        querySnapshot.forEach(candidate => {
          candidates.push(candidate.data());
        });
        this.setState({ candidates });
      })
      .catch(error => {
        alert("Ha ocurrido un error: " + error);
      });
  }

  render() {
    return <Candidates candidates={this.state.candidates} />;
  }
}

export default HandleCandidates;
