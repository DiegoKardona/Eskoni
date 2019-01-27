import React from "react";
import { render } from "react-dom";

import "./styles.scss";

//Importing react router
import { Switch, BrowserRouter, Route } from "react-router-dom";

//Importing redux
import { Provider } from "react-redux";
import store from "./store/store";

/*Importing pages*/
//Home
import HomePage from "./pages/home/HomePage";

//Auth page
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";

//ControlPanel page
import ControlPanel from "./pages/controlPanel/ControlPanel";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/register" component={RegisterPage} />
        <Route exact path="/control" component={ControlPanel} />
      </Switch>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
