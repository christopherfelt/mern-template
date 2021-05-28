import React from "react";
import { Col, Container, Row, Nav, Tab, Form, Button } from "react-bootstrap";

import Base from "./Base";

import "./StyleSheets/ProfilePage.css";

const Profile = () => {
  return (
    <Base>
      <Container className="vh-100">
        <Row>
          <Col className="text-center mt-5">
            <h1>Profile Page</h1>
          </Col>
        </Row>
        <Tab.Container className="" defaultActiveKey="general">
          <Row className="h-75 mt-5">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column tab-color">
                <Nav.Item className="">
                  <Nav.Link eventKey="general">General</Nav.Link>
                </Nav.Item>
                <Nav.Item className="">
                  <Nav.Link eventKey="second">Account</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="general">
                  But be contented: when that fell arrest Without all bail shall
                  carry me away, My life hath in this line some interest, Which
                  for memorial still with thee shall stay. When thou reviewest
                  this, thou dost review The very part was consecrate to thee:
                  The earth can have but earth, which is his due; My spirit is
                  thine, the better part of me: So then thou hast but lost the
                  dregs of life, The prey of worms, my body being dead;
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="p-4">
                    <div className="mb-5 pb-4">
                      <div className="pt-3 pb-1 my-3 border-bottom">
                        <h5>Change Password</h5>
                      </div>
                      <div>
                        <Form>
                          <Form.Group>
                            <Form.Control
                              type="password"
                              placeholder="Current Password"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Control
                              type="password"
                              placeholder="New Password"
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            className="float-right"
                          >
                            Save
                          </Button>
                        </Form>
                      </div>
                    </div>
                    <div className="mb-5 pb-4">
                      <div className="pt-3 pb-1 my-3 border-bottom">
                        <h5>Logout</h5>
                      </div>
                      <div>
                        <Button variant="primary" className="float-right mb-5">
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Base>
  );
};

export default Profile;
