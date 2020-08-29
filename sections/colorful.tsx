import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  yPosition: number;
  min: number;
};
export default function Colorful({ yPosition, min }: Props) {
  const [isActive, activate] = React.useState(false);
  // small effect after rendering
  React.useLayoutEffect(() => {
    let timeout = setTimeout(() => {
      activate(true);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);
  const scroll = yPosition + window.innerHeight * 0.46;
  // image animations
  const imgStyle = {
    initial: {
      filter: "grayscale(100%)",
      transform: `translate3d(-100%,${yPosition}px,0) scale(1)`
    },
    visible: {
      filter: "grayscale(100%)",
      transform: `translate3d(10%,${yPosition}px,0) scale(1.3)`
    },
    active: {
      filter: "grayscale(0%)",
      transform: `translate3d(0%,${yPosition}px,0) scale(1)`
    }
  };
  const imgProps = {
    animate: isActive ? imgStyle.active : imgStyle.visible,
    initial: imgStyle.initial,
    transition: { delay: 0.2 }
  };
  // background animations
  const backgroundStyle = {
    initial: { transform: `translate3d(-100%,${yPosition}px,0) scale(0.8)` },
    visible: { transform: `translate3d(10%,${yPosition}px,0) scale(0.9)` },
    active: { transform: `translate3d(0%,${yPosition}px,0) scale(1)` }
  };
  const backgroundProps = {
    transition: {
      delay: 0.4
    },
    initial: backgroundStyle.initial,
    animate: isActive ? backgroundStyle.active : backgroundStyle.visible
  };
  // paragraoh animations
  const paragraphStyle = {
    initial: {
      opacity: 0,
      transform: `translate3d(0,${scroll + 60}px,0) scale(1.3)`
    },
    active: {
      opacity: 1,
      transform: `translate3d(0%,${scroll}px,0) scale(1)`
    }
  };
  const paragraphProps = {
    initial: paragraphStyle.initial,
    animate: paragraphStyle.active,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 100,
      mass: 0.5
    }
  };
  // title 1 animations
  const header1Style = {
    initial: {
      opacity: 0,
      transform: `translate3d(0,-${scroll + 60}px,0) scale(1.3)`
    },
    active: {
      opacity: 1,
      transform: `translate3d(0%,${scroll}px,0) scale(1)`
    }
  };
  const titleProps = {
    transition: {
      delay: 0.6,
      type: "spring",
      stiffness: 100,
      mass: 0.5
    },
    animate: header1Style.active,
    initial: header1Style.initial
  };
  return (
    <motion.div animate={{ opacity: yPosition - min < 100 ? 0 : 1 }}>
      <Img {...imgProps} src={url} />
      <P {...paragraphProps}>I like</P>
      <H1 {...titleProps}>Colorful design</H1>
      <Background {...backgroundProps} />
    </motion.div>
  );
}
const H1 = styled(motion.h1)`
  font-size: 4.6rem;
  color: #fff;
  position: absolute;
  z-index: 99;
  left: 60%;
  top: calc(46% + 30px);
`;
const P = styled(motion.p)`
  font-size: 1.2rem;
  color: #fff;
  position: absolute;
  z-index: 999;
  left: 60%;
  top: 46%;
`;

const Img = styled(motion.img)`
  width: 50%;
  object-fit: cover;
  z-index: 1;
  height: calc(100vh + 32px);
  top: -20px;
  left: 0px;
  position: fixed;
`;
const Background = styled(motion.div)`
  width: 100%;
  height: calc(100vh + 32px);
  top: -20px;
  position: fixed;
  background-color: #000;
`;
const url =
  "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80";
