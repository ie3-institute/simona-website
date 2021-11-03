import React from 'react';
import SectionContainer from '../SectionContainer';
import {
  SectionImage,
  SectionText,
  SectionHeading,
  SectionParagraph,
} from './SectionRight.styles';

const SectionRight = ({ image, header, paragraph }) => {
  return (
    <SectionContainer>
      <div> HELLO </div>
      <SectionImage src={image} />
      <SectionText>
        <SectionHeading>{header}</SectionHeading>
        <SectionParagraph>{paragraph}</SectionParagraph>#
      </SectionText>
    </SectionContainer>
  );
};

export default SectionRight;
