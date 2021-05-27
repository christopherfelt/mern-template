import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";

import Base from "./Base";

const Profile = () => {
  return (
    <Base>
      <Container className="vh-100">
        <Row>
          <Col className="text-center mt-5">
            <h1>Account Page</h1>
          </Col>
        </Row>
        <Tab.Container className="" defaultActiveKey="first">
          <Row className="h-75 mt-5">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  But be contented: when that fell arrest Without all bail shall
                  carry me away, My life hath in this line some interest, Which
                  for memorial still with thee shall stay. When thou reviewest
                  this, thou dost review The very part was consecrate to thee:
                  The earth can have but earth, which is his due; My spirit is
                  thine, the better part of me: So then thou hast but lost the
                  dregs of life, The prey of worms, my body being dead;
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  But be contented: when that fell arrest Without all bail shall
                  carry me away, My life hath in this line some interest, Which
                  for memorial still with thee shall stay. When thou reviewest
                  this, thou dost review The very part was consecrate to thee:
                  The earth can have but earth, which is his due; My spirit is
                  thine, the better part of me: So then thou hast but lost the
                  dregs of life, The prey of worms, my body being dead;
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
