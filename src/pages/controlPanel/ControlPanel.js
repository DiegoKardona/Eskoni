import React, { Component } from "react";

//Importing redux
import { connect } from "react-redux";

//Importing router
import { Redirect } from "react-router";

/* Importing components */
import Header from "../home/containers/header/HandleRenderMenu";
//HandleControl controls the Control component
import Control from "./containers/control/HandleControl";
import Footer from "../home/components/footer/Footer";

class VotePage extends Component {
  componentDidMount() {
    document.title = "E'Skoni | Panel de administración";
  }

  render() {
    return this.props.user.email === this.props.admins[0] ||
      this.props.user.email === this.props.admins[1] ? (
      <div id="control-page">
        <Header />
        <Control />
        <Footer />
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = (state, props) => {
  return { user: state.user, admins: state.admins };
};

export default connect(mapStateToProps)(VotePage);
