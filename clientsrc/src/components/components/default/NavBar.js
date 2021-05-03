import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand className="text-primary" href="#home">
        Web App
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">News</Nav.Link>
        <Nav.Link href="#pricing">Donate</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
