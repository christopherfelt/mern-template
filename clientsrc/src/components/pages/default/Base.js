import React from "react";
import { motion } from "framer-motion";

import NavBar from "../../components/default/NavBar";
import Footer from "../../components/default/Footer";

const baseVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const Base = (props) => {
  return (
    <div className="">
      <NavBar />
      <motion.div
        className="vh-100"
        variants={baseVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {props.children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Base;
