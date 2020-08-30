import React from "react";
import { motion } from "framer-motion";
import { useHover } from "../../../hooks";

const Wallet = () => {
  const [events, isHovered] = useHover();

  return (
    <svg {...events} width="200" height="200" viewBox="0 0 86 40" fill="none">
      <motion.path
        initial={{ rotate: 0 }}
        animate={{ rotate: isHovered ? -18 : 0, y: isHovered ? -10 : 0 }}
        d="M6 15.0912C6 10.6225 9.18013 7 13.103 7H42.897C46.8199 7 50 10.6225 50 15.0911V26.9089C50 31.3775 46.8199 35 42.897 35H13.103C9.18012 35 6 31.3775 6 26.9089V15.0912Z"
        fill="#FF58EE"
      />
      <motion.path
        initial={{ rotate: 0 }}
        animate={{ rotate: isHovered ? -18 : 0, y: isHovered ? -5 : 0 }}
        d="M6 15.0912C6 10.6225 9.18013 7 13.103 7H42.897C46.8199 7 50 10.6225 50 15.0911V26.9089C50 31.3775 46.8199 35 42.897 35H13.103C9.18012 35 6 31.3775 6 26.9089V15.0912Z"
        fill="#D458FF"
      />
      <motion.path
        initial={{ rotate: 0 }}
        animate={{ rotate: isHovered ? -18 : 0 }}
        d="M6 15.0912C6 10.6225 9.18013 7 13.103 7H42.897C46.8199 7 50 10.6225 50 15.0911V26.9089C50 31.3775 46.8199 35 42.897 35H13.103C9.18012 35 6 31.3775 6 26.9089V15.0912Z"
        fill="#AA58FF"
      />

      <rect
        y="0.576172"
        width="56"
        height="41"
        rx="8"
        fill="#E4CAFF"
        fillOpacity="0.6"
      />
      <circle cx="44" cy="21.5762" r="6" fill="white" fillOpacity="0.62" />
    </svg>
  );
};
export default Wallet;
