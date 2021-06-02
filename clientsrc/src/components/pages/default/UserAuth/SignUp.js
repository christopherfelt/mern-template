import React, { useState } from "react";
import { Form, Button, Fade } from "react-bootstrap";

import UserPool from "../../../../context/Auth/UserPool";

import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setIsError(false);
    setErrorMessage("");
    setIsSuccess(true);
    setVerifyMessage("Verify Email Address");

    // UserPool.signUp(email, password, [], null, (err, data) => {
    //   if (err) {
    //     console.error("Failed to signin: " + err);
    //     setIsError(true);
    //     setErrorMessage(err.message);
    //   } else {
    //     setIsError(false);
    //     setErrorMessage("");
    //     setIsSuccess(true);
    //     setVerifyMessage("Verify Email Address");
    //   }
    // });
  };

  const changePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      {isError && (
        <div className="w-100 text-center text-danger mb-3 ">
          <small>{errorMessage}</small>
        </div>
      )}

      <div className="w-100 text-info position-relative">
        <small
          className={`message ${
            !isSuccess ? "message-hidden" : "message-show"
          }`}
        >
          {verifyMessage}
        </small>
      </div>

      <Form
        onSubmit={submitHandler}
        className={`${isSuccess ? "form-hidden" : "form-show"}`}
      >
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type={passwordType}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <small onClick={changePasswordType} className="float-right">
            show
          </small>
        </Form.Group>
        <div className="d-flex justify-content-center pt-3">
          <Button variant="primary" type="submit" className="float-right">
            Sign Up
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignUp;
