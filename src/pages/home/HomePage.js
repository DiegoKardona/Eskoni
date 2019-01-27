import React, { Component } from "react";

/*Importing components*/
//HandleRenderMenu controls the menu of the Header
import Header from "./containers/header/HandleRenderMenu";
//HandleVotationState controls the state of the votation and render Mainhero if it's true
import HandleVotationState from "./containers/votationState/HandleVotationState";
import Footer from "./components/footer/Footer";

class HomePage extends Component {
  componentDidMount() {
    document.title = "E'Skoni | Votación representante de grupo";
  }

  render() {
    return (
      <div id="home-page">
        <Header />
        <HandleVotationState />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
