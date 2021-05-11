import React from "react";
import { Col, Row } from "react-bootstrap";

import Base from "./Base";

const LandingPage = () => {
  return (
    <Base>
      <Row className="h-75">
        <Col className="d-flex justify-content-center align-items-center">
          <div>
            <h1>hello from landing page</h1>
          </div>
        </Col>
      </Row>
    </Base>
  );
};

export default LandingPage;
