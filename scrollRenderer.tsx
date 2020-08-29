import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "./hooks";

type Props = {
  children: JSX.Element | JSX.Element[];
  max: number;
  min?: number;
  native?: boolean;
};

const ScrollRenderer = ({ children, max, min, native }: Props) => {
  const { scroll, isOnScreen } = useScroll({ max: max, min: min ? min : 0 });
  return (
    <AnimatePresence exitBeforeEnter>
      {isOnScreen && (
        <motion.div
          style={native ? {} : { position: "fixed", width: "100%", top: "44%" }}
          transition={{ type: "tween" }}
          initial={{ opacity: 0, y: (scroll - (!!min ? min : 0)) * 0.025 }}
          animate={{
            opacity: 1,
            y: (scroll - (!!min ? min : 0)) * 0.025
          }}
          exit={{ y: (scroll - (!!min ? min : 0)) * 0.025, opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ScrollRenderer;
