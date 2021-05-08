import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="white" variant="light">
      <Navbar.Brand className="text-primary" href="/">
        Web App
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/auth">Login</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
