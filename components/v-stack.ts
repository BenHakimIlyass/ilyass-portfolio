import styled, { css } from "styled-components";

type StackAPI = {
  space: number;
  top?: number;
  splitAfter?: number;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const spaceGenerator = ({ space, top }: StackAPI) => css`
  display: flex;
  margin-top: ${top}rem;
  flex-direction: column;
  justify-content: flex-start;
  & > * + * {
    margin-top: ${space}rem !important;
  }
`;
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const splitHandler = ({ splitAfter }: StackAPI): any =>
  splitAfter &&
  css`
    &:only-child {
      height: 100%;
    }
    & > :nth-child(${splitAfter}) {
      margin-bottom: auto;
    }
  `;

const VStack = styled.div<StackAPI>`
  ${spaceGenerator}
  ${splitHandler}
`;

export default VStack;
