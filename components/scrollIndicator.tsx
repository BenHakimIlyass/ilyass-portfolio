import React from "react";
import { motion, useViewportScroll } from "framer-motion";
import styled from "styled-components";

const ScrollIndicator = (props) => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <Box>
      <svg
        width="69"
        height="69"
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M66 34.5C66 51.897 51.897 66 34.5 66C17.103 66 3 51.897 3 34.5C3 17.103 17.103 3 34.5 3C51.897 3 66 17.103 66 34.5Z"
          stroke="#8E82EE"
          strokeWidth="6"
          style={{ pathLength: scrollYProgress }}
          {...props}
        />
      </svg>
    </Box>
  );
};
const Box = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 800;
`;
export default ScrollIndicator;
