import styled from 'styled-components';

export const HeroWrapper = styled.div`
  background: var(--lightGreen);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeroContent = styled.div`
  max-width: var(--maxWidth);
  margin: 0 60px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column-reverse;
  }
`;

export const HeroImage = styled.img`
  width: 50%;
  max-width: 640px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: 90%;
    padding: 60px;
  }
`;

export const HeroText = styled.div`
  text-align: left;
  width: 100%;
  max-width: 640px;
  @media screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroHeading = styled.h1`
  position: relative;
  width: 100%;
  left: 0;
  bottom: 60px;
  @media screen and (max-width: 768px) {
    font-size: var(--fontMedium);
  }
`;

export const HeroParagraph = styled.div`
  color: var(--lightGrey);
  font-weight: 300;
  max-width: 75%;
  position: relative;
  bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: var(--fontSmall);
  }
`;
