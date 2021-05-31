import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { AccountContext } from "../../../../context/Auth/Accounts";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        user.changePassword(password, newPassword, (err, result) => {
          if (err) console.log(err);
          console.log(result);
        });
      });
    });
  };

  return (
    <>
      <div className="mb-5 py-4">
        <div className="pt-3 pb-1 my-3 border-bottom">
          <h5>Change Password</h5>
        </div>
        <div>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Current Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="New Password"
                onChange={(event) => setNewPassword(event.target.value)}
              />
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

export default ChangePassword;
