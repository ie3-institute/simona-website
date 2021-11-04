import styled from 'styled-components';

export const SectionImage = styled.img`
  width: 40%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 60px;
  }
`;

export const SectionText = styled.div`
  text-align: left;
  max-width: 640px;
  @media screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionHeading = styled.h2`
  position: relative;
  width: 70%;
  bottom: 60px;
  @media screen and (max-width: 768px) {
    font-size: var(--fontBig);
  }
`;

export const SectionParagraph = styled.div`
  color: var(--lightGrey);
  font-weight: 300;
  position: relative;
  bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: var(--fontSmall);
  }
`;
