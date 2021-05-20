import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Base from "./Base";

import "./StyleSheets/LandingPage.css";

const LandingPage = () => {
  return (
    <Base>
      <Container className="vh-100">
        <Row className="h-75">
          <Col className="d-flex justify-content-center align-items-center ">
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
