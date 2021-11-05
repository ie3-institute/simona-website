import React from 'react';
import { Container, CardHeading, CardParagraph, CardIcon } from './Card.styles';

const Card = ({ heading, paragraph, icon }) => {
  return (
    <Container>
      <CardIcon> {icon} </CardIcon>
      <CardHeading>{heading}</CardHeading>
      <CardParagraph>{paragraph}</CardParagraph>
    </Container>
  );
};

export default Card;
