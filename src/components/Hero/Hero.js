import React from "react";
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
          This portfolio was built to display my desire to solve complex
          challenges and build purposeful systems using innovative technologies.
        </SectionText>
        {/* <Link to="#about"> */}
        <Button onClick={props.handleClick}>Learn More</Button>
        {/* </Link> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
