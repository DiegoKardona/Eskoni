import React, { PureComponent } from "react";

import firebase from "firebase";

//Importing redux
import { connect } from "react-redux";

//Importing RegisterForm component to handle it
import RegisterForm from "../../components/registerForm/RegisterForm";

class HandleRegisterForm extends PureComponent {
  state = {
    email: "",
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleRegister = e => {
    e.preventDefault();

    if (this.state.username != "") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          firebase
            .auth()
            .currentUser.updateProfile({ displayName: this.state.username });

          this.props.dispatch({
            type: "CHANGE_USERNAME",
            payload: this.state.username
          });

          alert("Cuenta creada!");
        })
        .catch(error => alert("Ha ocurrido un error: " + error.code));
    } else {
      alert("Porfavor ingresa un usuario");
    }
  };

  render() {
    return (
      <RegisterForm
        data={this.state}
        handleChange={this.handleChange}
        handleRegister={this.handleRegister}
      />
    );
  }
}

export default connect()(HandleRegisterForm);
