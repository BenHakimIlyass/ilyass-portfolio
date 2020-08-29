import React from "react";
import data from "./data";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useMousePosition } from "../../hooks";

type TSkill = {
  d: string;
  key: number;
};
const Skill = ({ d, key, ...rest }: TSkill) => (
  <>
    <rect {...rest} height="37" rx="4" stroke="#C42D78" strokeWidth="2" />
    <path fill="#C42D78" d={d} />
  </>
);

type Props = {
  style: React.CSSProperties;
  scroll: number;
};
const Skills = ({ style }: Props) => {
  const [state, toggle] = React.useState(false);
  const { x, y } = useMousePosition();

  return (
    <div
      style={{
        ...style,
        backgroundColor: "transparent",
        textAlign: "center",
        position: "relative"
      }}
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ zIndex: 99 }}
        transition={{ delay: 0.4 }}
      >
        <svg
          width="444"
          height="210"
          viewBox="0 0 444 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {data.map((item, key) => (
            <Skill {...item} key={key} />
          ))}
        </svg>
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {state && (
          <Cursor
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: 1,
              x: x - 20,
              top: y - window.innerHeight * 0.4
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
const Cursor = styled(motion.div)`
  width: 40px;
  height: 40px;
  z-index: -1;
  position: absolute;
  background-color: #ffe0f0;
  border-radius: 40px;
`;

export default Skills;
