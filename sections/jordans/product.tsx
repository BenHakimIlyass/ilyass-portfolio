import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Stack, AnimatedP, AnimatedH3 } from "../../components";

type Props = {
  onPass: () => void;
  product: {
    backgroundImage: string[];
    img: string;
    title: string;
    description: string;
  };
};
const Product = ({ product, onPass }: Props) => {
  const [hover, setHover] = React.useState(false);
  const { title, description, img, backgroundImage } = product;
  const transition = {
    type: "spring",
    damping: 100,
    stiffness: 1200
  };
  const handleHover = () => ({
    onMouseEnter: () => setHover((prev) => !prev),
    onMouseLeave: () => setHover((prev) => !prev)
  });

  return (
    <Wrapper
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "calc(120% + 600px)" }}
      onPanEnd={onPass}
    >
      <Img
        {...handleHover()}
        src={img}
        initial={{ scale: 0.4, x: "-120%" }}
        animate={{ scale: 1, x: 0 }}
        exit={{ scale: 0 }}
        alt={title}
        whileHover={{ scale: 1.1, y: -20 }}
        draggable="false"
      />
      <Shadow
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={transition}
      />
      <Stack space={2}>
        <Circle
          transition={transition}
          initial={{ scale: 0, x: "-100%" }}
          animate={{
            scale: 1,
            x: "0%",
            backgroundImage: hover ? backgroundImage[0] : backgroundImage[1]
          }}
          exit={{ scale: 0 }}
        />
        <AnimatedH3
          style={{ color: "#102A43", fontSize: "2.2rem", lineHeight: "2.4rem" }}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={transition}
        >
          {title}
        </AnimatedH3>
        <AnimatedP
          style={{ color: "#829AB1", fontSize: "1.2rem", lineHeight: "1.4rem" }}
          initial={{ x: "-150%" }}
          animate={{ x: "0%" }}
          transition={transition}
        >
          {description}
        </AnimatedP>
      </Stack>
    </Wrapper>
  );
};

const Shadow = styled(motion.div)`
  width: 400px;
  height: 60px;
  opacity: 0.6;
  top: 240px;
  position: absolute;
  z-index: 86;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    #646464 0%,
    rgba(196, 196, 196, 0) 100%
  );
`;
const Wrapper = styled(motion.div)`
  width: 580px;
  height: auto;
  padding-bottom: 100px;
  margin: 0 auto;
  position: relative;
`;
const Img = styled(motion.img)`
  width: 440px;
  height: auto;
  z-index: 99;
  object-fit: cover;
  position: absolute;
`;
const Circle = styled(motion.div)`
  border-radius: 100%;
  width: 380px;
  height: 380px;
  margin: 0 auto;
  z-index: 80;
`;
export default Product;
