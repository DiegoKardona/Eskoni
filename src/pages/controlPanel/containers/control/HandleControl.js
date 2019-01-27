import React, { Component } from "react";

import firebase from "firebase";

//Importing Control component to handle it
import Control from "../../components/control/Control";

class HandleControl extends Component {
  state = {
    votationState: null
  };

  handleVotationState = () => {
    const db = firebase.firestore();
    const batch = db.batch();

    const votationState = db.collection("global").doc("votation-state");

    votationState
      .get()
      .then(doc => this.setState({ votationState: doc.data().open }))
      .catch(error => alert("Ha ocurrido un error: " + error.code));
    batch.update(votationState, { open: !this.state.votationState });

    batch.commit().then(() => {
      alert("Votación " + this.state.votationState);
    });
  };

  render() {
    return (
      <Control
        handleVotationState={this.handleVotationState}
        votationState={this.state.votationState}
      />
    );
  }
}

export default HandleControl;
