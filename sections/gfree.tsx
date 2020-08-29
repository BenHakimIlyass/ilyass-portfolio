import React from "react";
import { H1, P, Button, Center, Stack } from "../components";
const Gfree = () => {
  return (
    <Stack space={0.8} top={-4}>
      <P style={{ color: "#102A43" }}>I have worked on</P>
      <Stack space={2}>
        <H1 style={{ color: "#3EBD93" }}>Gfree project</H1>
        <P style={{ color: "#829AB1" }}>
          A community made for everything gluten free related.
        </P>
        <Center>
          <a href="https://gfree.co" target="_blanc">
            <Button icon="gfree">
              <>Take a look</>
            </Button>
          </a>
        </Center>
      </Stack>
    </Stack>
  );
};
export default Gfree;
