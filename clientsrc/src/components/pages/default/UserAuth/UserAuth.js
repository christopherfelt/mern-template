import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Row, Button, Tab, Tabs } from "react-bootstrap";

import Base from "./../Base";
import Login from "./Login";
import SignUp from "./SignUp";

import "./UserAuth.scss";

const UserAuth = () => {
  const [key, setKey] = useState("login");

  return (
    <Base>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="h-100 d-flex justify-content-center align-items-center">
            <div
              className="user-auth-card border p-3"
              defaultActiveKey="stuff1"
            >
              <Row className="h-75">
                <Col className="option-area">
                  <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    variant="pills"
                    className="d-flex justify-content-around"
                  >
                    <Tab eventKey="login" title="Login" className="p-3">
                      <Login />
                    </Tab>
                    <Tab eventKey="signin" title="Sign Up" className="p-3">
                      <SignUp />
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
              <Row>
                <Col className="mt-5 d-flex justify-content-center">
                  <div>
                    <small>Forgot Password?</small>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default UserAuth;
