import React, { Component } from "react";

import firebase from "firebase";

//Importing NewCandidate component to handle it
import NewCandidate from "../../components/newCandidate/NewCandidate";

class HandleNewCandidate extends Component {
  state = {
    candidatePhoto: null,
    photoProgress: 0,
    candidateName: ""
  };

  handlePhoto = e => {
    e.preventDefault();

    const storageRef = firebase.storage().ref(`${this.state.candidateName}`);

    const task = storageRef.put(this.state.candidatePhoto);

    task.on(
      "state_changed",
      snapshot => {
        var progressPercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ photoProgress: progressPercentage });
      },
      error => {
        alert("Ha ocurrido un error");
      },
      () => {
        task.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.setState({
            ...this.state,
            candidatePhoto: downloadURL,
            photoProgress: 100
          });
        });
      }
    );
  };

  handleChange = e => {
    switch (e.target.name) {
      case "candidatePhoto": {
        this.setState({ ...this.state, candidatePhoto: e.target.files[0] });
        break;
      }

      default:
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const db = firebase.firestore();

    db.collection("candidates")
      .doc(this.state.candidateName)
      .set({
        name: this.state.candidateName,
        photo: this.state.candidatePhoto,
        votes: 0
      })
      .then(() => alert("Representante agregado!"))
      .catch(error => alert("Ha ocurrido un error: " + error.code));
  };

  render() {
    return (
      <NewCandidate
        data={this.state}
        handlePhoto={this.handlePhoto}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default HandleNewCandidate;
