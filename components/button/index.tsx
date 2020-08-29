import React from "react";
import styled, { css } from "styled-components";
import { Cluster } from "../";
import icons from "./icons";

const colors = {
  github: css`
    border-color: #102a43;
    p {
      color: #102a43;
    }
  `,
  twitter: css`
    border-color: #1da1f2;
    p {
      color: #1da1f2;
    }
  `,
  resume: css`
    border-color: #c42d78;
    p {
      color: #c42d78;
    }
  `,
  gfree: css`
    border-color: #c42d78;
    p {
      color: #c42d78;
    }
  `,
};
const shadows = {
  github: css`
    box-shadow: 0px 0px 16px rgba(16, 42, 67, 0.24);
  `,
  twitter: css`
    box-shadow: 0px 0px 16px rgba(29, 161, 242, 0.24);
  `,
  resume: css`
    box-shadow: 0px 0px 16px rgba(196, 45, 120, 0.24);
  `,
  gfree: css`
    box-shadow: 0px 0px 16px rgba(16, 42, 67, 0.24);
  `,
};

type Icons = keyof ReturnType<typeof icons>;
type Props = {
  icon: Icons;
  children: JSX.Element | JSX.Element[];
};
const Button = ({ icon, children, ...rest }: Props) => {
  return (
    <Thumbnail icon={icon} {...rest}>
      <Cluster alignItems="center" justifyContent="center" space={1}>
        <div>{icons()[icon]}</div>
        <p>{children}</p>
      </Cluster>
    </Thumbnail>
  );
};
const handleShadows = (icon: Icons) => shadows[icon];
const handleColors = (icon: Icons) => colors[icon];

const Thumbnail = styled.button`
  border-width: 2px;
  border-style: solid;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  width: 230px;
  height: 60px;
  ${({ icon }: { icon: Icons }) => handleColors(icon)}
  cursor:pointer;
  transition: all 0.4s;
  &:hover {
    ${({ icon }: { icon: Icons }) => handleShadows(icon)}
  }
  p {
    font-size: 1.6rem;
    height: 28px;
  }
`;

export default Button;
