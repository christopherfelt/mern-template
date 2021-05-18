import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Account } from "./context/Auth/Accounts";

import LandingPage from "./components/pages/default/LandingPage";
import AboutPage from "./components/pages/default/AboutPage";
import ContactPage from "./components/pages/default/ContactPage";
import PrivacyPolicy from "./components/pages/default/PrivacyPolicy";
import TermsOfService from "./components/pages/default/TermsOfService";
import UserAuthorization from "./components/pages/default/UserAuth/UserAuth";
import ProfilePage from "./components/pages/default/ProfilePage";

import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  const location = useLocation();

  return (
    <Account>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/privacy" exact component={PrivacyPolicy} />
          <Route path="/termsofservice" exact component={TermsOfService} />
          <Route path="/auth" exact component={UserAuthorization} />
          <Route path="/profile" exact component={ProfilePage} />
        </Switch>
      </AnimatePresence>
    </Account>
  );
}

export default App;
