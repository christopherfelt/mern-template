import React from "react";
import { Form, Button } from "react-bootstrap";

const ChangeEmail = () => {
  return (
    <>
      <div className="mb-5 pb-4">
        <div className="pt-3 pb-1 my-3 border-bottom">
          <h5>Change Email</h5>
        </div>
        <div>
          <Form>
            <Form.Group>
              <Form.Control type="email" placeholder="Current Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="New Email" />
            </Form.Group>
            <Button variant="primary" type="submit" className="float-right">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ChangeEmail;
