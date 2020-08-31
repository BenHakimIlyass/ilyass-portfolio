import * as React from "react";
import styled from "styled-components";

import { Wallet, Camera, Cloud, Bell, Folder } from "./icons";
const AnimatedIcons = () => {
  return (
    <Main>
      <Folder />
      <Cloud />
      <Wallet />
      <Bell />
      <Camera />
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  justify-content: space-around;
`;
export default AnimatedIcons;
