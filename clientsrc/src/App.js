import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Account } from "./context/Auth/Accounts";

import LandingPage from "./components/pages/default/LandingPage";
import AboutPage from "./components/pages/default/AboutPage";
import ContactPage from "./components/pages/default/ContactPage";
import PrivacyPolicy from "./components/pages/default/PrivacyPolicy";
import TermsOfService from "./components/pages/default/TermsOfService";
import UserAuthorization from "./components/pages/default/UserAuth/UserAuth";

import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <Router>
      <Account>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/privacy" exact component={PrivacyPolicy} />
          <Route path="/termsofservice" exact component={TermsOfService} />
          <Route path="/auth" exact component={UserAuthorization} />
        </Switch>
      </Account>
    </Router>
  );
}

export default App;
