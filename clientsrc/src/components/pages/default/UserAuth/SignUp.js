import React from "react";
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="float-right">
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default SignUp;
