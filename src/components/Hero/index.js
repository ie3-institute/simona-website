import React from 'react';
import {
  HeroWrapper,
  HeroHeading,
  HeroImage,
  HeroText,
  HeroParagraph,
  HeroContent,
} from './Hero.styles';
import HeroIllustration from '../../images/undraw/undraw_control_panel.svg';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroText>
          <HeroHeading>An agent-based energy system simulation</HeroHeading>
          <HeroParagraph>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </HeroParagraph>
        </HeroText>
        <HeroImage src={HeroIllustration} />
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
