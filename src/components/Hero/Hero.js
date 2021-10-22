import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Kaseem Bradley's <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of JavaScript Mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </SectionText>
        <Link href="#about">
          <Button onClick={props.handleClick}>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
