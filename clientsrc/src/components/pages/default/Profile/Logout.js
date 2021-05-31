import React from "react";
import { Button } from "react-bootstrap";

const Logout = () => {
  return (
    <>
      <div className="mb-5 py-4">
        <div className="pt-3 pb-1 my-3 border-bottom">
          <h5>Logout</h5>
        </div>
        <div>
          <Button variant="danger" className="float-right mb-5">
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Logout;
