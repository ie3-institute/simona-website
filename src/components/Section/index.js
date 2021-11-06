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
  return (
    <SectionContainer text={text} image={sectionImage} textLeft={textLeft} />
  );
};

export default Section;
