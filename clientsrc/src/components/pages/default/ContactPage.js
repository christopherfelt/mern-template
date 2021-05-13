import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Base from "./Base";

const ContactPage = () => {
  return (
    <Base>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <h1>Hello from the Contact Page</h1>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default ContactPage;
