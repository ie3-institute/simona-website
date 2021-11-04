import React from 'react';
import { SectionWrapper, SectionContent } from './SectionContainer.styles';

const SectionContainer = ({ left, right }) => {
  return (
    <SectionWrapper>
      <SectionContent>
        {left}
        {right}
      </SectionContent>
    </SectionWrapper>
  );
};

export default SectionContainer;
