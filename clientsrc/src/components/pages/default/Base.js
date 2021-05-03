import React from "react";

import NavBar from "../../components/default/NavBar";
import Footer from "../../components/default/Footer";

const Base = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Base;
