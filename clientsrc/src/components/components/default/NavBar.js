import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AccountContext } from "../../../context/Auth/Accounts";

const NavBar = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session:", session);
      setStatus(true);
    });
  }, []);

  const logoutHandler = () => {
    setStatus(false);
    logout();
  };

  return (
    <Navbar bg="white" variant="light" className="p-3">
      <Navbar.Brand as={Link} to="/">
        Web App
      </Navbar.Brand>

      <Nav className="ml-auto">
        {status ? (
          <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
        ) : (
          <Nav.Link as={Link} to="/auth">
            Login
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
