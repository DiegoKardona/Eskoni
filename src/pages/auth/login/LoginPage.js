import React, { Component } from "react";

//Importing redux
import { connect } from "react-redux";

//Importing router
import { Redirect } from "react-router";

/*Importing components*/
import Header from "./components/header/Header";
//HandleLoginForm controls the LoginForm component
import LoginForm from "./containers/loginForm/HandleLoginForm";
import Footer from "../../home/components/footer/Footer";

class LoginPage extends Component {
  componentDidMount() {
    document.title = "E'Skoni | Acceder a una cuenta";
  }

  render() {
    return this.props.logged ? (
      <Redirect to="/" />
    ) : (
      <div id="login-page">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { logged: state.logged };
};

export default connect(mapStateToProps)(LoginPage);
