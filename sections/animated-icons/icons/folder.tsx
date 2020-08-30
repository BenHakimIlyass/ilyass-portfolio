import React from "react";
import { motion } from "framer-motion";
import { useHover } from "../../../hooks";

const lines = [
  { x1: "25", y1: "19.9", x2: "58", y2: "19.9" },
  { x1: "25", y1: "26.9", x2: "58", y2: "26.9" },
  { x1: "25", y1: "47.9", x2: "58", y2: "47.9" },
  { x1: "25", y1: "33.9", x2: "58", y2: "33.9" },
  { x1: "25", y1: "40.9", x2: "58", y2: "40.9" },
];

const Folder = () => {
  const [events, isHovered] = useHover();

  return (
    <svg {...events} width="200" height="200" viewBox="0 0 86 80" fill="none">
      <rect
        width="45"
        height="49"
        rx="8"
        transform="matrix(1 0 0.0660997 0.997813 11.2793 19)"
        fill="#3B83FE"
      />
      <motion.g
        initial={{ opacity: 0, ry: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        filter="url(#filter0_d)"
      >
        <rect x="16" y="12" width="51" height="43" rx="8" fill="white" />
      </motion.g>
      {/* lines */}

      {lines.map(({ x1, x2, y1, y2 }, key) => (
        <motion.line
          transition={{ delay: (key + 1) * 0.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#486581"
          strokeWidth="0.2"
        />
      ))}
      <motion.path
        initial={{
          d:
            "M15.0847 27.802C16.0628 23.4933 20.4374 20.0005 24.8557 20.0005H63.8557C68.274 20.0005 71.0628 23.4933 70.0847 27.802L64.7716 51.2065C63.7935 55.5152 59.4189 59.008 55.0006 59.008H16.0006C11.5823 59.008 8.7935 55.5152 9.77161 51.2065L15.0847 27.802Z",
        }}
        animate={{
          y: 10,
          x: 8,
          d: isHovered
            ? "M15.0847 27.802C16.0628 23.4933 20.4374 20.0005 24.8557 20.0005H63.8557C68.274 20.0005 71.0628 23.4933 70.0847 27.802L64.7716 51.2065C63.7935 55.5152 59.4189 59.008 55.0006 59.008H16.0006C11.5823 59.008 8.7935 55.5152 9.77161 51.2065L15.0847 27.802Z"
            : "M9.60328 26.983C9.89533 22.5744 13.7138 19.0005 18.1321 19.0005H57.1321C61.5504 19.0005 64.8953 22.5744 64.6033 26.983L63.0169 50.9305C62.7248 55.3391 58.9064 58.913 54.4881 58.913H15.4881C11.0698 58.913 7.72484 55.3391 8.01689 50.9305L9.60328 26.983Z",
        }}
        fill="#E9EFFF"
        fillOpacity="0.84"
      />

      {/* shadow */}
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="83"
          height="75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.596078 0 0 0 0 0.639216 0 0 0 0 0.717647 0 0 0 0.24 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default Folder;
