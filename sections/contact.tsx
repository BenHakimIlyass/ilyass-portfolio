import React from "react";
import styled from "styled-components";
import { Cluster, Stack, Button, H1, P } from "../components";
const Contact = () => {
  return (
    <Stack space={4} top={-8}>
      <H1 style={{ color: "#102A43" }}>Thanks for your attention</H1>
      <P style={{ color: "#829AB1" }}>
        If you want me to be a part of your team, please feel free to contact
        me.
      </P>

      <Cluster alignItems="center" justifyContent="center" space={1}>
        <a
          href="https://github.com/BenHakimIlyass"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon="github">
            <>GitHub</>
          </Button>
        </a>
        <a
          href="/Ilyass_Ben_Hakim_-_Frontend_developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon="resume">
            <>Resume</>
          </Button>
        </a>
        <a
          href="https://twitter.com/dinasso1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon="twitter">
            <>Twitter</>
          </Button>
        </a>
      </Cluster>
      <Stack space={0.2}>
        <a
          style={{ color: "#829AB1" }}
          href="mailto:ilyassbenhakim2@gmail.com"
          target="_blanc"
          rel="noopener noreferrer"
        >
          <P style={{ color: "#829AB1", fontSize: "1.1rem", fontWeight: 300 }}>
            ilyassbenhakim2@gmail.com
          </P>
        </a>
        <a style={{ color: "#829AB1" }} href="tel:+212652305958">
          <P style={{ color: "#829AB1", fontSize: "1.1rem", fontWeight: 300 }}>
            +212 6 52 30 59 58
          </P>
        </a>
        <P style={{ color: "#829AB1", fontSize: "1.1rem", fontWeight: 300 }}>
          <a
            style={{ color: "#829AB1" }}
            href="https://github.com/BenHakimIlyass/zyro"
            target="_blanc"
          >
            Here
          </a>{" "}
          you will find the zyro repository
        </P>
      </Stack>
    </Stack>
  );
};

export default Contact;
