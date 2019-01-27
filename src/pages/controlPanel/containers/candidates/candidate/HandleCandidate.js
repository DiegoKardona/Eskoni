import React, { Component } from "react";

import firebase from "firebase";

//Importing redux
import { connect } from "react-redux";

//Importing Candidate component to handle it
import Candidate from "../../../components/candidates/candidate/Candidate";

class HandleCandidate extends Component {
  state = { userVoted: null, votes: null };

  handleVote = e => {
    const db = firebase.firestore();
    const batch = db.batch();

    const user = db.collection("votes").doc(this.props.user.email);

    /*user
      .get()
      .then(user =>
        this.setState({ ...this.state, userVoted: user.data().voted })
      )
      .catch(error => alert("Ha ocurrido un error: " + error));*/

    user
      .get()
      .then(user =>
        this.setState({
          ...this.state,
          userVoted: user.exists ? user.data().voted : false
        })
      )
      .catch(error => alert(`Ha ocurrido un error ${error}`));

    const candidate = db
      .collection("candidates")
      .doc(this.props.candidate.name);

    if (this.state.userVoted) {
      alert("Ya has votado");
    } else if (this.state.userVoted === null) {
      alert("Porfavor espera. (Si no ocurre nada vuelve a dar en elejir)");
    } else {
      candidate
        .get()
        .then(candidate => {
          this.setState({ ...this.state, votes: candidate.data().votes });
        })
        .catch(error => alert("Error obteniendo los datos:", error));

      var newValue = this.state.votes + 1;
      batch.update(candidate, { votes: newValue });
      batch.commit().then(() => {
        alert("Votación exitosa!");
      });

      db.collection("votes")
        .doc(this.props.user.email)
        .set({ voted: true })
        .catch(error => alert("Ha ocurrido un error: " + error.code));
    }
  };

  render() {
    return <Candidate {...this.props.candidate} handleVote={this.handleVote} />;
  }
}

const mapStateToProps = (state, props) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HandleCandidate);
