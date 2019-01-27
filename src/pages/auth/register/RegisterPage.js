import React, { Component } from "react";

//Importing redux
import { connect } from "react-redux";

//Importing router
import { Redirect } from "react-router";

/*Importing components*/
//Header from login page
import Header from "../login/components/header/Header";
//HandleRegisterForm controls the RegisterForm component
import RegisterForm from "./containers/registerForm/HandleRegisterForm";
import Footer from "../../home/components/footer/Footer";

class RegisterPage extends Component {
  componentDidMount() {
    document.title = "E'Skoni | Registrar una cuenta";
  }

  render() {
    return this.props.logged ? (
      <Redirect to="/" />
    ) : (
      <div id="register-page">
        <Header />
        <RegisterForm />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { logged: state.logged };
};

export default connect(mapStateToProps)(RegisterPage);
