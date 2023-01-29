import { motion } from "framer-motion";
import React from "react";

const PlaneWrapper = ({ children }: any) => {
  return (
    <>
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: [0, 20] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PlaneWrapper;
