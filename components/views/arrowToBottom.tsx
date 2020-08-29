import React from "react";
import { motion } from "framer-motion";

export const Arrow = () => {
  return (
    <motion.svg
      initial={{ y: 2, opacity: 0 }}
      animate={{ y: 40, opacity: 1 }}
      transition={{
        type: "tween",
        repeat: Infinity,
        repeatType: "mirror",
      }}
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.3877 15.5002H20.4334L17.8501 2.5835H13.1489L10.5656 15.5002H3.61133L15.4995 29.0867L27.3877 15.5002ZM21.6946 18.0835L15.4994 25.1636L9.30431 18.0835H12.6834L15.2667 5.16683H15.7322L18.3155 18.0835H21.6946Z"
        fill="#334E68"
      />
    </motion.svg>
  );
};
