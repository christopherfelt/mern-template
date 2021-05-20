import React, { useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  });

  return (
    <div>
      <NavBar />
      <motion.div
        variants={baseVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-vh-100"
      >
        {props.children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Base;
