import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const gradient = ({ gradient }: { gradient: string }) =>
  !!gradient &&
  css`
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(${gradient});
  `;
const alignement = css`
  text-align: ${({ direction }: { direction?: "left" | "right" }) =>
    direction ? direction : "center"};
  ${gradient}
`;
const Paragraph = css`
  margin: 0 auto;
  color: #fff;
  font-size: 1.6rem;
  ${alignement}
  max-width: 600px;
  line-height: 2rem;
`;
const Header = css`
  margin: 0 auto;
  font-size: 3.4rem;
  max-width: 690px;
  font-weight: 700;
  color: #fff;
  line-height: 3.8rem;
  ${alignement}
`;
const Header3 = css`
  margin: 0 auto;
  font-size: 2.2rem;
  max-width: 400px;
  color: #fff;
  line-height: 2.4rem;
  ${alignement}
`;
export const P = styled.p`
  ${Paragraph}
`;
export const AnimatedP = styled(motion.p)`
  ${Paragraph}
`;
export const AnimatedH1 = styled(motion.h1)`
  ${Header}
`;
export const H1 = styled.h1`
  ${Header}
`;
export const AnimatedH3 = styled(motion.h3)`
  ${Header}
`;
export const H3 = styled.h3`
  ${Header3}
`;
