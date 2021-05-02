import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={2} className="border p-5"></Col>
          <Col xs={10} className="border p-5"></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
