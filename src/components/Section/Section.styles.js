import styled from 'styled-components';

export const SectionImage = styled.img`
  height: 70%;
  max-width: 50%;
  margin: auto;

  @media screen and (max-width: 1280px) {
    margin-right: 20px;
  }
`;

export const SectionText = styled.div`
  text-align: left;
  width: 50%;
  margin-left: 20px;
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

export const SectionParagraph = styled.p`
  color: var(--lightGrey);
  font-weight: 300;
  position: relative;
  bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: var(--fontSmall);
  }
`;
