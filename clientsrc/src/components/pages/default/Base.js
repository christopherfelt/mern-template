import React from "react";

import NavBar from "../../components/default/NavBar";
import Footer from "../../components/default/Footer";

const Base = (props) => {
  return (
    <div className="">
      <NavBar />
      <div className="vh-100">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Base;
