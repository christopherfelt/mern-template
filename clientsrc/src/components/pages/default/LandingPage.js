import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Base from "./Base";

const LandingPage = () => {
  return (
    <Base>
      <Container className="h-100">
        <Row className="h-75">
          <Col className="d-flex justify-content-center align-items-center">
            <div>
              <h1>hello from landing page</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default LandingPage;
