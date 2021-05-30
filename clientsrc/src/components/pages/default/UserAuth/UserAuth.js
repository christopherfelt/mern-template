import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Form,
  Nav,
  Row,
  Button,
  Tab,
  Tabs,
} from "react-bootstrap";

import Base from "./../Base";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

import "./UserAuth.css";

const UserAuth = () => {
  const [key, setKey] = useState("login");

  return (
    <Base>
      <Container className="vh-100">
        <Row className="h-75">
          <Col className="h-100 d-flex justify-content-center align-items-center">
            <div className="user-auth-card border">
              <Tab.Container defaultActiveKey="login" className="h-100">
                <div className="position-relative h-100 p-3">
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Nav variant="pills" className="tab-color ml-4 pb-4">
                        <Nav.Item className="p-0 ">
                          <Nav.Link eventKey="login">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="p-0">
                          <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Tab.Content>
                        <Tab.Pane eventKey="login" className="pt-2 pb-3">
                          <Login />
                        </Tab.Pane>
                        <Tab.Pane eventKey="signup" className="pt-2 pb-3">
                          <SignUp />
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="forgotpassword"
                          className="pt-2 pb-3"
                        >
                          <ForgotPassword />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                  <Row className="forgot-password-row ">
                    <Col className="pb-3 ">
                      <Nav
                        variant="pills"
                        className="d-flex justify-content-center ml-5 mt-2 tab-color"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="forgotpassword">
                            <small>Forgot Password?</small>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </Row>
                </div>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default UserAuth;
