import React, { PureComponent } from "react";

//Importing redux
import { connect } from "react-redux";

//Importing MainHero component to handle it
import MainHero from "../../components/mainHero/MainHero";

import LoginHero from "../../components/mainHero/LoginHero";

class HandleMainHero extends PureComponent {
  render() {
    return this.props.logged ? <MainHero /> : <LoginHero />;
  }
}

const mapStateToProps = (state, props) => {
  return { logged: state.logged };
};

export default connect(mapStateToProps)(HandleMainHero);
