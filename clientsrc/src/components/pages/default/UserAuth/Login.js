import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { AccountContext } from "../../../../context/Auth/Accounts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        console.error("Failed to log in: " + err.message);
        setIsError(true);
        setErrorMessage(err.message);
      });
  };

  return (
    <>
      {isError && (
        <div className="w-100 text-center text-danger mb-3 ">
          <small>{errorMessage}</small>
        </div>
      )}
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
        <div className="d-flex justify-content-center pt-3">
          <Button variant="primary" type="submit" className="" size="">
            Login
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Login;
