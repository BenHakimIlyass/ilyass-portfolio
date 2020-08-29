import styled, { css } from "styled-components";

type Props = {
  maxWidth: string | number;
  gutters: string | number;
  intrinsic: boolean;
};

const Center = styled.div<Partial<Props>>`
  box-sizing: content-box;
  position:relative;
  margin-left: auto;
  margin-right: auto;
  ${({ maxWidth }): any => css`
    max-width: ${maxWidth};
  `}
  ${({ gutters }): any => css`
    padding-left: ${gutters};
    padding-right: ${gutters};
  `}
  ${({ intrinsic }): any =>
    intrinsic &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
 `;

export default Center;
