import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { AccountContext } from "../../../../context/Auth/Accounts";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  //   const { authenticate } = useContext(AccountContext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
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
        <div className="d-flex justify-content-center pt-3">
          <Button
            variant="primary"
            type="submit"
            className="float-right"
            size=""
          >
            Send
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ForgotPassword;
