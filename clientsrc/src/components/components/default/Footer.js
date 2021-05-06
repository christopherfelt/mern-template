import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="py-3">
          <Col sm={12} md={3} className="">
            <div className="d-flex align-items-center">
              <Link to="/">
                <h4>Web App</h4>
              </Link>
              <span className="ml-1 light-gray-text-color">
                &#169; Web App by ...{" "}
              </span>
            </div>
          </Col>
          <Col sm={12} md={6} className=""></Col>
          <Col
            sm={12}
            md={3}
            className="d-flex align-items-center justify-content-between"
          >
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/privacy">
              <span>Privacy</span>
            </Link>
            <Link to="/termsofservice">
              <span>Terms</span>
            </Link>
            <Link to="/contact">
              <span>Contact</span>
            </Link>
            <Link to="/about">
              <span>About</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
