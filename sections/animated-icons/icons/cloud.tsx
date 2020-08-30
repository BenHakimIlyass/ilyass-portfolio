import React from "react";
import { motion } from "framer-motion";
import { useHover } from "../../../hooks";

const drops = [
  "M19.0645 60L19 63",
  "M31.0645 55L31 58",
  "M50.0645 60L50 63",
  "M41.0645 62L41 65",
];

const Cloud = () => {
  const [events, isHovered] = useHover();

  return (
    <svg {...events} width="200" height="200" viewBox="0 0 86 70" fill="none">
      <motion.circle
        cx="47"
        initial={{ cy: 27, opacity: 1 }}
        animate={{
          opacity: isHovered ? 0 : 1,
          cy: isHovered ? 63 : 27,
          scale: isHovered ? 0.6 : 1,
        }}
        r="19"
        fill="#FF7D18"
      />
      <motion.path
        initial={{ fill: "#FFD2BD" }}
        animate={{ fill: isHovered ? "#dadada" : "#FFD2BD" }}
        d="M5 39.5C5 51.9264 15.0736 62 27.5 62H51C51 62 64 61.5 64 49C63.0174 34.9705 49.7294 36 49.7294 36C48.0482 25.2358 38.7359 17 27.5 17C15.0736 17 5 27.0736 5 39.5Z"
        fill="#FFD2BD"
        fillOpacity="0.6"
      />
      <path
        d="M15.0645 43C16.1347 47.3312 18.0037 48.7663 21.7011 50.3003"
        stroke="white"
        strokeOpacity="0.62"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      {/* water drop */}
      {drops.map((d, key) => (
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ delay: key * 0.05 }}
          d={d}
          stroke="#81C3F3"
          strokeOpacity="0.62"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
      ))}
    </svg>
  );
};
export default Cloud;
