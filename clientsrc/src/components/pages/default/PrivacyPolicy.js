import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Base from "./Base";

const PrivacyPolicy = () => {
  return (
    <Base>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <h1>Hello from the Privacy Policy</h1>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default PrivacyPolicy;
