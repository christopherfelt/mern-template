import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./components/pages/default/LandingPage";
import AboutPage from "./components/pages/default/AboutPage";
import ContactPage from "./components/pages/default/ContactPage";
import PrivacyPolicy from "./components/pages/default/PrivacyPolicy";
import TermsOfService from "./components/pages/default/TermsOfService";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/privacy" exact component={PrivacyPolicy} />
        <Route path="/termsofservice" exact component={TermsOfService} />
      </Switch>
    </Router>
  );
}

export default App;
