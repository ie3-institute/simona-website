import React from 'react';
import { SectionWrapper, SectionContent } from './SectionContainer.styles';

const SectionContainer = ({ text, image, textLeft }) => {
  return textLeft ? (
    <SectionWrapper>
      <SectionContent textLeft={textLeft}>
        {text}
        {image}
      </SectionContent>
    </SectionWrapper>
  ) : (
    <SectionWrapper>
      <SectionContent textLeft={textLeft}>
        {image}
        {text}
      </SectionContent>
    </SectionWrapper>
  );
};

export default SectionContainer;
