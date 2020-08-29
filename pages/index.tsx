import Head from "next/head";
import * as React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

import ScrollRenderer from "../scrollRenderer";
import { Stack, P, H1, H3, Button, Center } from "../components";
import { useScroll } from "../hooks";
import { makeProps, makeMax, makeMin } from "../helpers";
import {
  Skills,
  Gfree,
  Jordans,
  Clock,
  Colorful,
  Colorless,
  Contact,
} from "../sections";

const favicons = ["blue", "pink", "gray"];
export default function App() {
  const { scroll } = useScroll({});
  const [favicon, set] = React.useState<number>(0);
  React.useEffect(() => set(Math.floor(Math.random() * 3)), []);
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim - Protfolio</title>
        <link rel="icon" href={`/Favicons/${favicons[favicon]}.ico`} />
      </Head>
      <Reset />
      <Main
        animate={{
          backgroundColor:
            scroll >= makeMax(7.5)
              ? "#fff"
              : scroll >= makeMax(6.5)
              ? "#262626"
              : scroll >= makeMax(2.5)
              ? "#fff"
              : scroll >= makeMax(0)
              ? "#99EEEE"
              : scroll >= 0
              ? "#f96754"
              : "#000",
        }}
      >
        {/* first section */}
        <ScrollRenderer {...makeProps(0)}>
          <Stack space={0.8}>
            <P>Hey there! my name is</P>
            <H1>Ilyass Ben Hakim</H1>
          </Stack>
        </ScrollRenderer>

        {/* second section */}
        <ScrollRenderer {...makeProps(0.8)}>
          <P>
            A <b>clean design </b>minded young software engineer and web
            designer.
          </P>
        </ScrollRenderer>

        {/* third section */}
        <ScrollRenderer {...makeProps(1.6)}>
          <P>
            I heared about your offer for React JS developper, and i think i
            would be a good fit for this position.
          </P>
        </ScrollRenderer>

        {/* foorth section */}
        <ScrollRenderer {...makeProps(2.4)}>
          <Stack space={0.8}>
            <P>So let's see</P>
            <H1>What i can do?</H1>
          </Stack>
        </ScrollRenderer>

        {/* skills section */}
        <ScrollRenderer {...makeProps(3)}>
          <Stack space={2} top={-8}>
            <H3 style={{ color: "#C42D78" }}>Skills</H3>
            <Skills style={{ textAlign: "center" }} scroll={scroll} />
          </Stack>
        </ScrollRenderer>

        {/* gfree section */}
        <ScrollRenderer {...makeProps(4)}>
          <Gfree />
        </ScrollRenderer>

        {/* animations section */}
        <ScrollRenderer {...makeProps(5)}>
          <Stack space={1} top={-3}>
            <P style={{ color: "#1F374E" }}>Examples of</P>
            <H1 gradient="90deg, #1F374E 0%, #1F374E 0.01%, #E196BB 100%">
              Web animations that i made
            </H1>
          </Stack>
        </ScrollRenderer>

        {/* jordans section */}
        <ScrollRenderer {...makeProps(6)}>
          <Stack space={0} top={-22}>
            <Jordans />
          </Stack>
        </ScrollRenderer>

        {/* clock section */}
        <ScrollRenderer {...makeProps(7)}>
          <Stack space={4} top={-4}>
            <P>Digital clock logic, using react-spring and svg</P>
            <Clock />
          </Stack>
        </ScrollRenderer>

        {/* colorful design section */}
        <ScrollRenderer {...makeProps(7.8, 8.8)} native>
          <Colorful yPosition={scroll} min={makeMin(6.8)} />
        </ScrollRenderer>

        {/* colorless design section */}
        <ScrollRenderer {...makeProps(8.8, 9.8)} native>
          <Colorless yPosition={scroll} min={makeMin(7.6)} />
        </ScrollRenderer>

        {/* contact */}
        <ScrollRenderer {...makeProps(10.4, 11)}>
          <Contact />
        </ScrollRenderer>
      </Main>
    </>
  );
}

const Main = styled(motion.div)`
  font-family: Muli;
  height: 16000px;
  background-color: #f96754;
`;
const Reset = createGlobalStyle`
body {
  margin: 0;
  position: relative;
  overflow-x: hidden;
  height:7000px;
  font-family: Muli;
}

h1,
p,
h3 {
  margin: 0;
}
@font-face {
  font-family: Muli;
  src: url(Muli/Muli.ttf);
  font-weight: 400;
}
@font-face {
  font-family: Muli;
  src: url(Muli/Muli-Bold.ttf);
  font-weight: 700;
}
@font-face {
  font-family: Muli;
  src: url(Muli/Muli-Light.ttf);
  font-weight: 300;
}
@font-face {
  font-family: Muli;
  src: url(Muli/Muli-SemiBold.ttf);
  font-weight: 500;
}


`;