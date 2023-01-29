import { motion } from "framer-motion";
import React from "react";

const BtnWrapper = ({ children }: any) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: "1.02" }}
        whileTap={{ scale: "0.98" }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="w-[100%]"
      >
        {children}
      </motion.div>
    </>
  );
};

export default BtnWrapper;
