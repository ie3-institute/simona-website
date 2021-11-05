import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  width: 325px;
  height: 520px;
  background-color: var(--lightGreen);
  border-radius: 6%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CardHeading = styled.h3`
  margin: 30px;
  position: relative;
  top: -35px;
  text-align: left;
`;

export const CardParagraph = styled.p`
  margin: 0 30px;
  position: relative;
  bottom: 20px;
  text-align: left;
`;

export const CardIcon = styled.div`
  color: var(--darkGrey);
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 2.8rem;
`;
