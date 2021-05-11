import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { AccountContext } from "../../../../context/Auth/Accounts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    authenticate(email, password)
      .then((data) => {
        console.log("logged in!", data);
        history.push("/");
      })
      .catch((err) => {
        console.error("Failed to log in");
      });
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
