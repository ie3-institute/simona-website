import React from 'react';
import SectionContainer from '../SectionContainer';
import {
  SectionImage,
  SectionText,
  SectionHeading,
  SectionParagraph,
} from './Section.styles';

const Section = ({ image, header, paragraph, textLeft }) => {
  const sectionImage = <SectionImage src={image} />;
  const text = (
    <SectionText>
      <SectionHeading>{header}</SectionHeading>
      <SectionParagraph>{paragraph}</SectionParagraph>
    </SectionText>
  );

  return textLeft ? (
    <SectionContainer left={text} right={sectionImage} />
  ) : (
    <SectionContainer left={sectionImage} right={text} />
  );
};

export default Section;
