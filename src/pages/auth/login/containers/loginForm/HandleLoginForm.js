import React, { PureComponent } from "react";

import firebase from "../../../../../firebase";

//Importing LoginForm component to handle it
import LoginForm from "../../components/loginForm/LoginForm";

class HandleLoginForm extends PureComponent {
  state = {
    email: "",
    password: ""
  };

  handleEmailAuth = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => alert("Sesión iniciada"))
      .catch(error => {
        alert(error.code);
      });
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleGoogleAuth = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(() => alert("Sesión iniciada"))
      .catch(error => alert("Ha ocurrido un error: " + error.code));
  };

  handleFacebookAuth = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().useDeviceLanguage();

    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(() => alert("Sesión iniciada"))
      .catch(error => alert("Ha ocurrido un error: " + error.code));
  };

  render() {
    return (
      <LoginForm
        handleEmailAuth={this.handleEmailAuth}
        handleChange={this.handleChange}
        data={this.state}
        handleGoogleAuth={this.handleGoogleAuth}
        handleFacebookAuth={this.handleFacebookAuth}
      />
    );
  }
}

export default HandleLoginForm;
