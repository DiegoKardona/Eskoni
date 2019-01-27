import React, { Component } from "react";

//Importing redux
import { connect } from "react-redux";

import firebase from "firebase";

/*Importing components*/
//Importing Header component to handle it
import Header from "../../components/header/Header";
//Importing every menu for every case
import {
  LoggedMenu,
  AdminMenu,
  LoginMenu
} from "../../components/header/menu/HeaderMenu";

class HandleRenderMenu extends Component {
  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Sesion cerrada");
      })
      .catch(error => {
        alert("Ha ocurrido un error:" + error.code);
      });
  };

  renderMenu = () => {
    if (this.props.logged) {
      return this.props.user.email === this.props.admins[0] ||
        this.props.user.email === this.props.admins[1] ? (
        <AdminMenu user={this.props.user} handleLogout={this.handleLogout} />
      ) : (
        <LoggedMenu user={this.props.user} handleLogout={this.handleLogout} />
      );
    } else {
      return <LoginMenu />;
    }
  };

  render() {
    return <Header handleRenderMenu={this.renderMenu()} />;
  }
}

const mapStateToProps = (state, props) => {
  return { logged: state.logged, user: state.user, admins: state.admins };
};

export default connect(mapStateToProps)(HandleRenderMenu);
