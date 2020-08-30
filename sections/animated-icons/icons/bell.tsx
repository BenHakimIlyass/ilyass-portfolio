import React from "react";
import { motion } from "framer-motion";
import { useHover } from "../../../hooks";

const soundEffect = [
  { x1: "66.3957", y1: "52.082", x2: "73.4427", y2: "53.9704" },
  { x1: "66.1681", y1: "45.3944", x2: "73.2152", y2: "43.5063" },
  { x1: "63.4534", y1: "57.4547", x2: "68.612", y2: "62.6136" },
];

const Bell = () => {
  const [events, isHovered] = useHover();

  return (
    <svg {...events} width="200" height="200" viewBox="0 0 86 70" fill="none">
      {soundEffect.map(({ x1, x2, y1, y2 }, key) => (
        <motion.line
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ delay: key * 0.05 }}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#FFC398"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      <motion.path
        initial={{
          d:
            "M43 52C43 58.0751 38.0751 63 32 63C25.9249 63 21 58.0751 21 52C21 46.338 25.2778 41.6751 30.7778 41.0671C31.1791 41.0228 31.5869 41 32 41C38.0751 41 43 45.9249 43 52Z",
        }}
        animate={{
          d: isHovered
            ? "M52 52C52 58.0751 47.0751 63 41 63C34.9249 63 30 58.0751 30 52C30 46.338 34.2778 41.6751 39.7778 41.0671C40.1791 41.0228 40.5869 41 41 41C47.0751 41 52 45.9249 52 52Z"
            : "M43 52C43 58.0751 38.0751 63 32 63C25.9249 63 21 58.0751 21 52C21 46.338 25.2778 41.6751 30.7778 41.0671C31.1791 41.0228 31.5869 41 32 41C38.0751 41 43 45.9249 43 52Z",
        }}
        fill="#FF7E18"
      />
      <motion.path
        initial={{ rotate: 0 }}
        animate={{ rotate: isHovered ? 6 : 0 }}
        d="M34.5386 7C22.1122 7 12.0386 17.0736 12.0386 29.5V45C12.0386 45 7.54004 46 8.03858 50C8.47584 53.5083 12.0386 54 12.0386 54H57.0386C57.0386 54 60.6669 53.3451 61.0386 50C61.5078 45.7766 57.0386 45 57.0386 45V29.5C57.0386 17.0736 46.965 7 34.5386 7Z"
        fill="#FFD2BD"
        fillOpacity="0.6"
      />
      <path
        d="M30.9814 15.6533C26.5768 16.3633 24.9927 18.1078 23.1595 21.6664"
        stroke="white"
        strokeOpacity="0.62"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};
export default Bell;
