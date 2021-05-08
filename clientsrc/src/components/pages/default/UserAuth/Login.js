import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { AccountContext } from "../../../../context/Auth/Accounts";

const Login = () => {
  const { authenticate } = useContext(AccountContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello from login");
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
