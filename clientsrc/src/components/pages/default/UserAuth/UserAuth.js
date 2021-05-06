import React from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";

import Base from "./../Base";

import "./UserAuth.scss";

const UserAuth = () => {
  return (
    <Base>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="h-100 d-flex justify-content-center align-items-center">
            <div className="user-auth-card border">
              <Row className="">
                <Col className="option-area d-flex align-items-end">
                  <div className=" w-100 d-flex justify-content-around border">
                    <span className="">Login</span>
                    <span className="">Sign Up</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default UserAuth;
