import React from "react";
import { motion } from "framer-motion";
import { useHover } from "../../../hooks";

const Camera = () => {
  const [events, isHovered] = useHover();

  return (
    <svg {...events} width="200" height="200" viewBox="0 0 86 70" fill="none">
      <motion.path
        initial={{ rotate: 0 }}
        transition={{ delay: 0.2 }}
        animate={{ rotate: isHovered ? -16 : 0 }}
        d="M21 38.988V31.8047C21 30.1212 22.0541 28.6179 23.6368 28.0442L58.428 15.4323C59.9787 14.8702 61.7154 15.3176 62.8015 16.5589L63.5103 17.3689C64.1483 18.0981 64.5 19.034 64.5 20.0029V47.9971C64.5 48.966 64.1483 49.9019 63.5103 50.6311L62.6733 51.5876C61.6521 52.7547 60.0483 53.2264 58.5578 52.7979L23.8948 42.8322C22.1807 42.3395 21 40.7714 21 38.988Z"
        fill="#3B83FE"
      />
      <motion.path
        initial={{ rotate: 0 }}
        animate={{ rotate: isHovered ? -16 : 0 }}
        d="M6 20C6 15.5817 9.58172 12 14 12H43C47.4183 12 51 15.5817 51 20V49C51 53.4183 47.4183 57 43 57H14C9.58172 57 6 53.4183 6 49V20Z"
        fill="#E9EFFF"
        fillOpacity="0.8"
      />
      <motion.circle
        animate={{ opacity: isHovered ? 1 : 0 }}
        initial={{ opacity: 0 }}
        cx="40"
        cy="17"
        r="2"
        fill="#E34242"
      />

      <motion.path
        transition={{ delay: 0.1 }}
        initial={{ rotate: 0 }}
        animate={{ rotate: isHovered ? -16 : 0 }}
        d="M25 22H15"
        stroke="white"
        strokeOpacity="0.62"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
export default Camera;
