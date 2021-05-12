import React from "react";
import { Col, Row } from "react-bootstrap";

import Base from "./Base";

const Profile = () => {
  return (
    <Base>
      <Row className="h-75">
        <Col className="d-flex justify-content-center align-items-center">
          <div>
            <h1>hello from profile page page</h1>
          </div>
        </Col>
      </Row>
    </Base>
  );
};

export default Profile;
