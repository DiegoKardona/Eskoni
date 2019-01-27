import React, { Component } from "react";

import firebase from "firebase";

//Importing VotationState component to handle it
import VotationState from "../../components/votationState/VotationState";

class HandleVotationState extends Component {
  state = {
    votation: null
  };

  render() {
    //Getting the state from firebase
    const db = firebase.firestore();

    const votationState = db.collection("global").doc("votation-state");

    votationState
      .get()
      .then(doc => this.setState({ votation: doc.data().open }))
      .catch(error => alert("Ha ocurrido un error: " + error.code));

    return <VotationState votationState={this.state.votation} />;
  }
}

export default HandleVotationState;
