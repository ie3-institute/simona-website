import styled from 'styled-components';

export const SectionImage = styled.img`
  height: 70%;
  width: 50%;
  margin: auto;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  /* @media screen and (max-width: 1280px) {
    max-width: 70%;
  } */
`;

export const SectionText = styled.div`
  text-align: left;
  width: 50%;
  margin-left: 20px;
  max-width: 640px;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionHeading = styled.h2`
  display: inline;
  position: relative;
  width: 100%;
  bottom: 60px;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: var(--fontBig);
  }
`;

export const SectionParagraph = styled.p`
  width: 100%;
  color: var(--lightGrey);
  font-weight: 300;
  position: relative;
  bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: var(--fontSmall);
  }
`;
