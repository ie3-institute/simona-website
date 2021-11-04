import React from 'react';
import { Container, CardHeading, CardParagraph, CardLogo } from './Card.styles';

const Card = ({ heading, paragraph, logo }) => {
  return (
    <Container>
      <CardHeading>{heading}</CardHeading>
      <CardParagraph>{paragraph}</CardParagraph>
      <CardLogo>{logo}</CardLogo>
    </Container>
  );
};

export default Card;
