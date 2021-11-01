import React from 'react';
import {
  HeroWrapper,
  HeroContainer,
  HeroHeading,
  HeroImage,
  HeroText,
  HeroParagraph,
} from './Hero.styles';
import HeroIllustration from '../../images/undraw/undraw_control_panel.svg';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroText>
          <HeroHeading>An agent-based energy system simulation</HeroHeading>
          <HeroParagraph>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </HeroParagraph>
        </HeroText>
        <HeroImage src={HeroIllustration} />
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
