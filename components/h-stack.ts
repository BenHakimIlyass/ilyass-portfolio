import * as CSS from "csstype";
import styled, { css } from "styled-components";

type Props = {
  space: number;
  style?: any;
} & Pick<CSS.Properties, "justifyContent" | "alignItems">;

const handleAlignement = ({
  justifyContent,
  alignItems,
  ...style
}: Partial<Props>): any =>
  css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent,
    alignItems
  });
const handleMargins = ({ space }: Partial<Props>): any => css`
  margin: calc(${space}rem / 2 * -1);
  & > * {
    margin: calc(${space}rem / 2);
  }
`;

const Cluster = styled.div<Props>`
  ${handleAlignement};
  ${handleMargins}
`;

export default Cluster;
